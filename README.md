# Sehati Binjai

![Sehati Binjai](public/thumbnail.png)

**Sehati Binjai** (*Sehat Ibu dan Anak Terintegrasi melalui Aplikasi dan Microgreen*) is an integrated health initiative (aligned with SDG 3) focused on stunting prevention through nutritional education and microgreen cultivation.

Developed as part of the **Lead Others 2024** program by **ZeroStunt — Tanoto Foundation**, in collaboration with **Dinas Kesehatan Kota Binjai**, this application provides easy and affordable access to health information for the people of Binjai.

## 🚀 Key Features

- **📊 Stunting Calculator**: A reliable tool to monitor child growth based on WHO Z-Score standards, processed locally for privacy.
- **🌱 Microgreen Guide**: Step-by-step tutorials for cultivating nutritious microgreens at home.
- **📚 Curated Content**: Expert-curated information for pregnant women, infants (*baduta*), and complementary foods (*MPASI*).
- **📶 Offline-First Experience**: Progressive Web App (PWA) capabilities allowing access to core features without an internet connection.
- **🔒 Privacy Focused**: No backend database or tracking; all calculation data stays on the user's device.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Project Structure

```text
├── app/              # Next.js pages and routing
├── components/       # Reusable UI components
├── lib/              # Logic, calculation utilities, and static data
├── public/           # Static assets (images, manifest, icons)
└── types/            # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/sehati-binjai.git
   cd sehati-binjai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Live Demo

Visit the official website at: [https://sehati-binjai.my.id/](https://sehati-binjai.my.id/)

## 🤝 Acknowledgments

- **Tanoto Foundation** (ZeroStunt - Lead Others 2024)
- **Dinas Kesehatan Kota Binjai**

---
*Built with ❤️ for a healthier Binjai.*
