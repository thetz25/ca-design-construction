import nodemailer from 'nodemailer'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import type { ContactFormData } from '@/lib/types'

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL

    // Validate data
    if (!data.name || !data.email || !data.phone || !data.message) {
      return Response.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(data.email)) {
      return Response.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!isValidPhone(data.phone)) {
      return Response.json(
        { success: false, message: 'Invalid phone number' },
        { status: 400 }
      )
    }

    if (data.message.length < 10) {
      return Response.json(
        { success: false, message: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    console.log('📧 Contact form submission received:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    })

    // Configure Nodemailer for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Send email
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD && contactEmail) {
      try {
        await transporter.verify()
        console.log('✅ SMTP connection verified')

        const mailOptions = {
          from: process.env.GMAIL_USER, // Gmail requires the sender to be the authenticated user
          to: contactEmail,
          replyTo: data.email, // Allow replying directly to the user
          subject: `New Contact Form Submission from ${data.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
                ${data.message.replace(/\n/g, '<br>')}
              </p>
            </div>
          `,
        }

        const info = await transporter.sendMail(mailOptions)
        console.log('✅ Email sent successfully:', info.messageId)
      } catch (emailError) {
        console.error('❌ Error sending email:', emailError)
        // We still return success to the user if everything else validated, 
        // but log the error for the admin. 
        // Or we could return an error to the user if email is critical.
        // For now, let's treat it as a server error if email fails.
         return Response.json(
          {
            success: false,
            message: 'Failed to send email. Please try again later.',
          },
          { status: 500 }
        )
      }
    } else {
      console.warn('⚠️ Gmail credentials or Contact Email not configured:', {
        hasUser: !!process.env.GMAIL_USER,
        hasPass: !!process.env.GMAIL_APP_PASSWORD,
        contactEmail,
      })
      // If verification mode, we might want to return this info
    }

    return Response.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will be in touch soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    return Response.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    )
  }
}
