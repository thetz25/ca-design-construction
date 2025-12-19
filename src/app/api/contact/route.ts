import sgMail from '@sendgrid/mail'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import type { ContactFormData } from '@/lib/types'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

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

    // Send email via SendGrid
    console.log('SendGrid check:', {
      hasApiKey: !!process.env.SENDGRID_API_KEY,
      contactEmail,
      apiKeyPrefix: process.env.SENDGRID_API_KEY?.substring(0, 10),
    })

    if (process.env.SENDGRID_API_KEY && contactEmail) {
      try {
        const response = await sgMail.send({
          to: contactEmail,
          from: contactEmail,
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
        })

        console.log('✅ Email sent successfully via SendGrid:', response)
      } catch (emailError) {
        console.error('❌ Error sending email via SendGrid:', {
          message: emailError instanceof Error ? emailError.message : String(emailError),
          error: emailError,
        })
      }
    } else {
      console.warn('⚠️ SendGrid not configured:', {
        hasApiKey: !!process.env.SENDGRID_API_KEY,
        contactEmail,
      })
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
