import { isValidEmail, isValidPhone } from '@/lib/utils'
import type { ContactFormData } from '@/lib/types'

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with email service (SendGrid, Resend, etc.)

    // For now, log the submission
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
