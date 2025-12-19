# CA Design + Construction Website

A modern, professional, conversion-focused website for CA Design + Construction - a premium architectural design and construction firm.

## Overview

This is a fully responsive Next.js 14 website built with TypeScript, Tailwind CSS, and Framer Motion animations. The site features a single-page layout with smooth scroll animations and a functional contact form.

## Features

- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Smooth Animations**: Fade-in, slide-up, and scroll-reveal animations using Framer Motion
- **Premium Branding**: Black (#000000) and Gold (#C9A24D) color scheme
- **Contact Form**: Backend API route with validation and error handling
- **Semantic HTML**: Proper heading hierarchy and accessibility
- **Modern Components**: Reusable React component library
- **Type-Safe**: Full TypeScript implementation with strict mode
- **Performance Optimized**: Optimized for Core Web Vitals

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/route.ts           # Contact form API endpoint
│   ├── layout.tsx                     # Root layout with metadata
│   ├── page.tsx                       # Homepage (assembles all sections)
│   └── globals.css                    # Tailwind & global styles
├── components/
│   ├── ui/                            # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Input.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Textarea.tsx
│   ├── animations/                    # Animation wrappers
│   │   ├── FadeIn.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── SlideUp.tsx
│   ├── sections/                      # Page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Process.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   └── ContactForm.tsx                # Contact form component
├── hooks/
│   └── useScrollReveal.ts             # Custom scroll reveal hook
└── lib/
    ├── constants.ts                   # All content & company info
    ├── types.ts                       # TypeScript interfaces
    └── utils.ts                       # Helper functions
public/
└── images/                            # Image assets (placeholder structure)
```

## Website Sections

1. **Hero** - Full-viewport hero with headline, CTA button, and background
2. **About** - Company overview with key highlights
3. **Services** - 5 service offerings displayed in grid cards
4. **Portfolio** - Featured projects gallery (expandable)
5. **Why Choose Us** - 5 value propositions
6. **Process** - 4-step workflow timeline
7. **Testimonials** - Client quotes with star ratings
8. **Contact** - Contact form with backend API, contact info, and map placeholder
9. **Footer** - Navigation links, company info, and social media

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Development Commands

```bash
# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## Customization

### Content Updates

All website content is centralized in `src/lib/constants.ts`. Update:
- Company information
- Service descriptions
- Project portfolio data
- Testimonials
- Process steps
- Contact details

### Branding

Brand colors and typography are defined in `tailwind.config.ts`:
- Primary: Black (#000000)
- Accent: Gold (#C9A24D)
- Fonts: Montserrat (headings), Inter (body)

### Adding Projects

Update the `PROJECTS` array in `src/lib/constants.ts` with project details and images:
```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  category: 'Residential',
  description: 'Project description',
  image: '/images/projects/project-image.jpg',
  featured: true // Shows in portfolio section
}
```

### Contact Form Integration

The contact form API route (`src/app/api/contact/route.ts`) currently logs submissions. To integrate with an email service:

1. Install email service package (e.g., `npm install nodemailer`)
2. Add API keys to environment variables (`.env.local`)
3. Update the route handler to send emails

Example integration point:
```typescript
// In src/app/api/contact/route.ts
import nodemailer from 'nodemailer'

// Add email sending logic here
```

## Environment Variables

Create `.env.local` file for environment-specific variables:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
EMAIL_SERVICE_API_KEY=your-api-key
EMAIL_TO=contact@cadesign.com
```

## Performance

- Tailwind CSS purges unused styles
- Images optimized with Next.js Image component
- Framer Motion uses GPU-accelerated transforms
- Code splitting for better bundle size
- Target: 90+ Lighthouse score

## Animation Details

### Scroll Reveal Animation
Elements animate as they enter the viewport:
- Fade-in: 0.6s
- Slide-up: 0.8s
- Staggered delays: 0.1s between items

### Configuration
Customize animation behavior in components:
```typescript
<ScrollReveal
  animation="slideUp"
  delay={0.2}
  duration={0.8}
  once={true}
>
  {children}
</ScrollReveal>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push to Git repository
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Traditional Hosting
For static hosting, update `next.config.js`:
```javascript
output: 'export'
```

**Note**: Contact form API route requires a server or serverless environment.

## Future Enhancements

- [ ] CMS Integration (Sanity, Contentful)
- [ ] Blog/Case Studies section
- [ ] Image gallery/lightbox
- [ ] Live chat support
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Search functionality
- [ ] Admin dashboard

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels for form inputs
- Keyboard navigation support
- Color contrast compliance

## SEO

- Meta tags and Open Graph
- Structured data markup (schema.org)
- Sitemap generation
- Mobile-friendly design
- Fast page load performance

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Type errors
```bash
npm run type-check
```

## Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

© 2024 CA Design + Construction. All rights reserved.

---

**Last Updated**: December 2024
**Next.js Version**: 14.2.0
**React Version**: 18.3.0
