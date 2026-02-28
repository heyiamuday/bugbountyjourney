import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './HeroSection';
import TimelineSection from './TimelineSection';
import TweetsSection from './TweetsSection';
import AchievementsSection from './AchievementsSection';
import MistakesSection from './MistakesSection';
import CTASection from './CTASection';
import './index.css';

// SVG icons
const LinuxIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a2 2 0 0 0-2 2c0 1.1.9 2 2 2s2-.9 2-2a2 2 0 0 0-2-2z"></path>
    <path d="M12 6c-3 0-5 3-5 6v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7c0-3-2-6-5-6z"></path>
    <path d="M14.5 19H9.5"></path>
    <path d="M7 16H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2"></path>
    <path d="M17 16h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2"></path>
    <circle cx="10" cy="11" r="1" fill="currentColor"></circle>
    <circle cx="14" cy="11" r="1" fill="currentColor"></circle>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container" style={{ margin: 0, fontSize: '1.25rem' }}>
      <span className="logo-a">A</span>
      <span><b>Google</b> Antigravity</span>
    </div>
    <div className="nav-links">
      <a href="#product">Product</a>
      <a href="#usecases">Use Cases</a>
      <a href="#pricing">Pricing</a>
      <a href="#blog">Blog</a>
      <a href="#resources">Resources</a>
    </div>
    <div>
      <a href="#download" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
        Download <DownloadIcon />
      </a>
    </div>
  </nav>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
    });
    lenis.stop();
    lenis.start();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <HeroSection />
      <TimelineSection />
      <TweetsSection />
      <AchievementsSection />
      <MistakesSection />
      <CTASection />
    </div>
  );
}
