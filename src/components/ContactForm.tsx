'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import type { ContactFormData } from '@/lib/types'

interface ContactFormState {
  data: ContactFormData
  errors: Partial<ContactFormData>
  submitted: boolean
  loading: boolean
  success: boolean
  message: string
}

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>({
    data: { name: '', email: '', phone: '', message: '' },
    errors: {},
    submitted: false,
    loading: false,
    success: false,
    message: '',
  })

  const validateForm = (): boolean => {
    const errors: Partial<ContactFormData> = {}

    if (!state.data.name.trim()) errors.name = 'Name is required'
    if (!state.data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!isValidEmail(state.data.email)) {
      errors.email = 'Please enter a valid email'
    }
    if (!state.data.phone.trim()) {
      errors.phone = 'Phone is required'
    } else if (!isValidPhone(state.data.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    if (!state.data.message.trim()) errors.message = 'Message is required'

    setState((prev) => ({ ...prev, errors }))
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setState((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
      errors: { ...prev.errors, [name]: undefined },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setState((prev) => ({ ...prev, loading: true }))

    const formData = new FormData()
    formData.append('access_key', 'e6272910-3a48-4067-af3e-f1f22f622677')
    formData.append('name', state.data.name)
    formData.append('email', state.data.email)
    formData.append('phone', state.data.phone)
    formData.append('message', state.data.message)
    formData.append('subject', `New Submission from ${state.data.name}`)
    formData.append('from_name', 'CA Design + Construction Website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setState({
          data: { name: '', email: '', phone: '', message: '' },
          errors: {},
          submitted: true,
          loading: false,
          success: true,
          message: 'Thank you! We will be in touch soon.',
        })

        setTimeout(() => {
          setState((prev) => ({ ...prev, submitted: false }))
        }, 5000)
      } else {
        setState((prev) => ({
          ...prev,
          loading: false,
          success: false,
          message: result.message || 'Something went wrong. Please try again.',
          submitted: true,
        }))
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        success: false,
        message: 'An error occurred. Please try again later.',
        submitted: true,
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          placeholder="Your name"
          value={state.data.name}
          onChange={handleChange}
          error={state.errors.name}
          disabled={state.loading}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={state.data.email}
          onChange={handleChange}
          error={state.errors.email}
          disabled={state.loading}
          required
        />
      </div>

      <Input
        label="Phone"
        name="phone"
        placeholder="(555) 123-4567"
        value={state.data.phone}
        onChange={handleChange}
        error={state.errors.phone}
        disabled={state.loading}
        required
      />

      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your project..."
        value={state.data.message}
        onChange={handleChange}
        error={state.errors.message}
        disabled={state.loading}
        required
      />

      <Button type="submit" size="lg" disabled={state.loading} className="w-full md:w-auto">
        {state.loading ? 'Sending...' : 'Send Message'}
      </Button>

      {state.submitted && (
        <div
          className={`p-4 rounded-lg ${state.success
              ? 'bg-green-100 text-green-800 border border-green-300'
              : 'bg-red-100 text-red-800 border border-red-300'
            }`}
        >
          {state.message}
        </div>
      )}
    </form>
  )
}
