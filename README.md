# MediaWorks Studio — Full-Stack Website

A professional, fully responsive website for a Film, Sound & Music production studio.  
Built with **React**, **Node.js**, **Express**, and plain **CSS** (no UI library dependencies).

---

## 📁 Folder Structure

```
mediaworks-studio/
├── package.json              ← Root scripts (dev, build, start)
├── .env.example              ← Environment variable template
│
├── server/                   ← Node.js + Express backend
│   ├── index.js              ← Server entry point
│   ├── routes/
│   │   └── contact.js        ← POST /api/contact route
│   └── controllers/
│       └── contactController.js ← Email sending logic (Nodemailer)
│
└── client/                   ← React frontend
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── index.js          ← React entry point
        ├── index.css         ← Global design system (CSS variables, reset)
        ├── App.js            ← Root component + scroll reveal setup
        ├── App.css
        └── components/
            ├── Navbar.js/css     ← Sticky nav, mobile hamburger menu
            ├── Hero.js/css       ← Full-screen hero, animated counters, ticker
            ├── Services.js/css   ← 4-card service grid with expand interaction
            ├── Work.js/css       ← Filterable portfolio grid
            ├── About.js/css      ← Studio story + team cards
            ├── Testimonials.js/css ← Auto-rotating testimonial carousel
            ├── Contact.js/css    ← Contact form connected to Express API
            └── Footer.js/css     ← Responsive multi-column footer
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Install root dependencies (Express, Nodemailer, etc.)
npm install

# 2. Install React dependencies
cd client && npm install && cd ..

# 3. Copy env file and configure
cp .env.example .env
# Edit .env with your SMTP credentials if you want real email sending
```

### Development (runs both servers)

```bash
npm run dev
# React dev server → http://localhost:3000
# Express API    → http://localhost:5000
```

### Production Build

```bash
npm run build   # Builds React into client/build/
npm start       # Serves everything from Express on port 5000
```

---

## ✨ What's Improved Over the Original

| Area | Original | This Version |
|------|----------|--------------|
| **Design** | Basic layout | Editorial dark aesthetic with gold accent system |
| **Typography** | Generic fonts | Bebas Neue (display) + DM Sans (body) + Space Mono (labels) |
| **Mobile** | Partial | Fully responsive at every breakpoint with hamburger menu |
| **Animations** | None | Scroll reveals, hero stagger, ticker, counter, hover states |
| **Architecture** | Static HTML | React SPA + Express API backend |
| **Portfolio** | Static list | Filterable by category |
| **Contact Form** | None / basic | Connected to Node/Express + Nodemailer with loading/success states |
| **Testimonials** | None | Auto-rotating carousel with manual dots |
| **Stats** | None | Animated number counters on page load |
| **Performance** | — | CSS-only animations, passive scroll listeners, lazy reveals |
| **Accessibility** | Poor | Semantic HTML, aria-labels, focus states |
| **SEO** | Minimal | Proper meta tags, semantic sections with IDs |

---

## 🔧 Configuring Email (Contact Form)

Edit `.env`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=you@gmail.com
SMTP_PASS=your_app_password
CONTACT_EMAIL=studio@yoursite.com
```

> For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) — not your regular password.

Without SMTP config, submissions are logged to the console (development mode).

---

## 🛠 Tech Stack

- **Frontend**: React 18, CSS3 (custom properties, grid, flexbox, keyframes)
- **Backend**: Node.js, Express 4
- **Email**: Nodemailer
- **Fonts**: Google Fonts (Bebas Neue, DM Sans, Space Mono)
- **Dev tooling**: concurrently, dotenv
