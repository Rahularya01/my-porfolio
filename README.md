# Rahul's Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional UI with no gradients
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Fully functional contact form with validation and email integration
- **SEO Optimized**: Proper metadata and structure for search engines
- **Performance**: Optimized for speed and performance

## 🚀 Sections

1. **Hero Section** - Introduction with call-to-actions
2. **About Section** - Personal story and skills showcase
3. **Experience Section** - Timeline of professional experience
4. **Projects Section** - Featured projects with technology stacks
5. **Testimonials Section** - Client feedback and reviews
6. **Contact Section** - Contact form with React Hook Form and Zod validation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Email**: Nodemailer for contact form
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/rahul-portfolio.git
cd rahul-portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

4. Configure your email credentials in `.env.local`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

5. Run the development server:

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📧 Email Setup

The contact form uses Nodemailer to send emails. To set up email functionality:

1. **For Gmail**:

   - Enable 2-factor authentication
   - Generate an app-specific password
   - Use the app password in `EMAIL_PASS`

2. **For other providers**:
   - Update the SMTP settings in `app/api/contact/route.ts`
   - Configure the appropriate host, port, and authentication

## 🎨 Customization

### Personal Information

- Update personal details in each component
- Replace social media links in `components/hero-section.tsx` and `components/contact-section.tsx`
- Update email address in `components/contact-section.tsx`

### Content

- **About Section**: Update skills, experience, and personal story
- **Experience Section**: Add your work experience and achievements
- **Projects Section**: Showcase your projects with real data
- **Testimonials Section**: Add real client testimonials

### Styling

- Primary color is set to `#fec00c` (yellow) - can be changed throughout the components
- Tailwind CSS classes can be customized for different styling preferences

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

```bash
pnpm build
pnpm start
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive and tested on:

- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## ⚡ Performance

- Optimized images and assets
- Efficient animations
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Feel free to reach out if you have any questions:

- Email: aryarahul819@pm.me
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- GitHub: [Your GitHub](https://github.com/your-username)

---

Built with ❤️ by Rahul
