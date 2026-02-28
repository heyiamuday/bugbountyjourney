# 🌌 365 Days Journey Site

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.183-black?logo=three.js)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, interactive portfolio website built for the **365 Days Journey** challenge. This site features a "zero-gravity" design with immersive animations, glowing effects, and a dynamic galaxy background.

🚀 **Live Demo:** [heyiamuday.github.io/bugbountyjourney/365-days-journey/](https://heyiamuday.github.io/bugbountyjourney/365-days-journey/)

---

## ✨ Features

- **Interactive Galaxy Background:** A high-performance WebGL background using `OGL`.
- **Zero-Gravity UI:** Smooth scroll experiences powered by `Lenis` and `Framer Motion`.
- **ShapeBlur Effects:** Custom shader-based glowing cards that adapt to rectangular bounds.
- **Dynamic Portfolio Sections:**
  - **Hero:** Immersive entrance with smooth typography.
  - **Timeline:** Visual progress tracking of the journey.
  - **Achievements & Mistakes:** Categorized grids with hover effects.
  - **Embedded Content:** Integrated tweets and external links.
- **Mobile Responsive:** Optimized for all screen sizes with a focus on visual excellence.

---

## 🛠️ Tech Stack

- **Core:** [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Graphics:** [OGL](https://github.com/o-gl/ogl) (WebGL) & [Three.js](https://threejs.org/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styling:** Vanilla CSS with custom design tokens.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/heyiamuday/bugbountyjourney.git
   cd 365-days-journey-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, icons)
├── Galaxy.jsx          # WebGL Background logic
├── ShapeBlur.jsx       # Custom shader effect
├── HeroSection.jsx     # Hero section component
├── TimelineSection.jsx # Progress tracking component
├── App.jsx             # Main application entry
├── index.css           # Global styles & design system
└── main.jsx            # React root mounting
```

---

## 🎨 Theme: Antigravity

This project utilizes the **Antigravity Theme**, focusing on:
- **Glassmorphism:** Elegant semi-transparent surfaces.
- **Vibrant Gradients:** Harmonious color palettes.
- **Interactive Micro-animations:** Responsive hover and scroll triggers.

---

## 📄 License

This project is private and intended for personal use in the 365 Days Journey challenge.

---

Built with ❤️ by [Uday](https://github.com/heyiamuday)
