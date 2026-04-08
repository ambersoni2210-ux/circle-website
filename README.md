# Circle — Build Your College Identity

Premium college merchandise and custom digital platforms.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone or download the project
cd circle-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
circle-website/
├── public/                   # Static assets (logos)
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Landing page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── shop/             # Shop (e-commerce)
│   │   ├── cart/             # Cart page
│   │   ├── checkout/         # Checkout page
│   │   ├── b2b/             # College Merchandise (B2B)
│   │   ├── app-solution/    # App Platform page
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog listing + [slug] detail
│   │   ├── contact/         # Contact & Book Meeting
│   │   └── careers/         # Careers page
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── ProductCard.tsx
│   │   └── AnimatedSection.tsx
│   ├── context/
│   │   └── CartContext.tsx   # Cart state management
│   ├── data/                # Mock data
│   │   ├── products.ts
│   │   ├── blog.ts
│   │   ├── careers.ts
│   │   └── testimonials.ts
│   └── hooks/
│       └── useInView.ts     # Intersection Observer hook
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State**: React Context (Cart)
- **Animations**: CSS transitions + Intersection Observer

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero, featured products, how it works, testimonials, brand story |
| Shop | `/shop` | Product listing with filters, sort, add to cart |
| Cart | `/cart` | Full cart page with quantity controls |
| Checkout | `/checkout` | Mock checkout with form |
| For Colleges (B2B) | `/b2b` | Bulk ordering, custom branding info |
| App Platform | `/app-solution` | College app features with phone mockup |
| About | `/about` | Mission, vision, story, values |
| Blog | `/blog` | Blog listing with featured post |
| Blog Post | `/blog/[slug]` | Individual blog post |
| Contact | `/contact` | Contact form + demo booking |
| Careers | `/careers` | Open roles with expandable details |
