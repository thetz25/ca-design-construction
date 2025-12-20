export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  gallery?: string[]
  featured?: boolean
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}

export interface WhyChooseUsItem {
  id: string
  icon: string
  title: string
  description: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}
