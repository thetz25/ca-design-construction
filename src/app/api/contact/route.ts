import { Resend } from 'resend'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import type { ContactFormData } from '@/lib/types'

const resend = new Resend(process.env.RESEND_API_KEY)
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

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

    // Check if API key and contact email are configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('Resend API key not configured. Logging submission instead.')
      console.log('Contact form submission:', {
        timestamp: new Date().toISOString(),
        ...data,
      })
      return Response.json(
        {
          success: true,
          message: 'Thank you for contacting us! We will be in touch soon.',
        },
        { status: 200 }
      )
    }

    if (!contactEmail) {
      console.error('Contact email not configured')
      return Response.json(
        {
          success: false,
          message: 'Email service not properly configured.',
        },
        { status: 500 }
      )
    }

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'CA Design <onboarding@resend.dev>',
      to: contactEmail,
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
          <hr>
          <p style="color: #999; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    })

    if (adminEmail.error) {
      console.error('❌ Error sending admin email:', JSON.stringify(adminEmail.error, null, 2))
      console.error('Email details:', { to: contactEmail, from: 'CA Design <onboarding@resend.dev>' })
      return Response.json(
        {
          success: false,
          message: `Failed to send email: ${JSON.stringify(adminEmail.error)}`,
        },
        { status: 500 }
      )
    }

    console.log('✅ Admin email sent successfully:', adminEmail.data?.id)

    // Send confirmation email to user
    const confirmEmail = await resend.emails.send({
      from: 'CA Design <onboarding@resend.dev>',
      to: data.email,
      subject: 'We received your message - CA Design + Construction',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for contacting us!</h2>
          <p>Hi ${data.name},</p>
          <p>We have received your message and appreciate your interest in CA Design + Construction. Our team will review your submission and get back to you as soon as possible.</p>
          <p><strong>Your Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${data.message.replace(/\n/g, '<br>')}
          </p>
          <p>Best regards,<br><strong>CA Design + Construction Team</strong></p>
          <hr>
          <p style="color: #999; font-size: 12px;">
            If you did not submit this form, please ignore this email.
          </p>
        </div>
      `,
    })

    if (confirmEmail.error) {
      console.warn('⚠️ Error sending confirmation email:', JSON.stringify(confirmEmail.error, null, 2))
    } else {
      console.log('✅ Confirmation email sent successfully:', confirmEmail.data?.id)
    }

    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...data,
      adminEmailId: adminEmail.data?.id,
    })

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
