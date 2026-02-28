import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MILESTONES = [
    'Read 2,500+ HackerOne reports',
    'Read 700+ bug bounty write-ups',
    'Completed API Hacking, IDOR, XSS, SSRF, BAC, Recon',
    'Mastered postMessage() Vulnerabilities & JS analysis',
    'Google Cybersecurity Professional Certificate',
    'PortSwigger Labs – 36% completed',
    "Completed The Bug Hunter's Methodology (TBHM) course",
    'All 8 APIsec University Courses (API Auth, Pen-Testing, OWASP Top 10…)',
]

const HUNTING = [
    '26 pts in HackerOne CTF',
    'Logged 450 hours of bug hunting',
    'Hunted on 4 live applications',
]

const HACKING_BOOKS = [
    "Web Application Hacker's Handbook (WAHH)",
    'Black Hat GraphQL',
    "Zseano's Methodology",
    'JavaScript for Hackers',
    'Hacking APIs – Corey J. Ball',
    'Exploratory Software Testing',
    'Bug Bounty Bootcamp',
]

const PERSONAL_BOOKS = [
    '12 Week Year', 'The Secret', 'Science of Rapid Skill Acquisition',
    'Meditations', 'Measure What Matters', 'How to Take Smart Notes',
    'GTD', 'Deep Work', 'Almanack of Naval Ravikant', '5 AM Club',
    '4DX', '168 Hours',
]

const PROJECTS = [
    // Top Tier - Full Stack / Major Projects
    { name: 'Social-Media-App', url: 'https://secrettalksonly.netlify.app/' },
    { name: 'Inventory Management', url: 'https://inventory-hjza.onrender.com/' },
    { name: 'Pokémon Memory Game', url: 'https://pokemon-memory-game-uday.netlify.app/' },
    { name: 'ClimateNow', url: 'https://heyiamuday.github.io/ClimateNow/' },

    // Strong Projects - React & Interactive
    { name: 'ShoppingCart-React', url: 'https://shopping-cart-uday.netlify.app/' },
    { name: 'CV App', url: 'https://cv-app-uday.netlify.app/' },
    { name: 'Todo List', url: 'https://too-list-react.netlify.app/' },

    // Solid Projects - JavaScript / DOM Manipulation
    { name: 'Library Dashboard', url: 'https://heyiamuday.github.io/Library-dashboard/' },
    { name: 'Tic Tac Toe', url: 'https://heyiamuday.github.io/Tic-Tac-Toe/' },
    { name: 'Sign Up Form', url: 'https://heyiamuday.github.io/Sign-up-Form/' },
    { name: 'Dev Tools', url: 'https://heyiamuday.github.io/Dev-Tools-JS/' },
    { name: 'HoldShift CheckAll', url: 'https://heyiamuday.github.io/HoldShift-CheckAll-JS/' },
    { name: 'Battleship', url: 'https://heyiamuday.github.io/Battleship-JS/' },
    { name: "Knights' Travails", url: 'https://heyiamuday.github.io/Knights-Travails-JS/' },
    { name: 'Canvas', url: 'https://heyiamuday.github.io/Canvas-JS/' },
    { name: 'Type Ahead', url: 'https://heyiamuday.github.io/Type-Ahead-js/' },
    { name: 'Flex Box', url: 'https://heyiamuday.github.io/Flex-box-JS/' },
]

function AchCard({ children, delay, title, icon, sage }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    return (
        <motion.div
            ref={ref}
            className="glow-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: sage ? '0 0 24px rgba(167,243,208,0.15)' : '0 0 24px rgba(99,102,241,0.2)' }}
        >
            <div className="glow-card-content">
                <div className="ach-card-title" style={{ color: sage ? 'var(--sage)' : 'var(--google-blue)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: 500, marginBottom: '16px' }}>
                    {icon}
                    {title}
                </div>
                {children}
            </div>
        </motion.div>
    )
}

export default function AchievementsSection() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge sage">Key Achievements</div>
                    <h2 className="section-title">
                        What I <span className="text-gradient">Accomplished</span>
                    </h2>
                    <p className="section-desc">A year's worth of relentless learning, hacking, and personal growth.</p>
                </div>

                <div className="achievements-wrapper">
                    {/* Learning Milestones */}
                    <AchCard delay={0} sage title="Learning Milestones" icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    }>
                        <ul className="ach-list">
                            {MILESTONES.map((m, i) => (
                                <li key={i}>
                                    <span className="ach-bullet" />
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </AchCard>

                    {/* Hacking Progress */}
                    <AchCard delay={0.1} title="Hacking Progress" icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                        </svg>
                    }>
                        <ul className="ach-list" style={{ marginBottom: 24 }}>
                            {HUNTING.map((h, i) => (
                                <li key={i}><span className="ach-bullet indigo" />{h}</li>
                            ))}
                        </ul>
                        <div className="ach-card-title" style={{ color: 'var(--sage)', marginTop: 24, marginBottom: 16, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 500 }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                                <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 014 17V5a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H6.5" />
                            </svg>
                            Hacking Books
                        </div>
                        <div className="books-grid">
                            {HACKING_BOOKS.map((b, i) => (
                                <div key={i} className="book-item">
                                    <span className="book-num">{i + 1}</span>
                                    {b}
                                </div>
                            ))}
                        </div>
                    </AchCard>

                    {/* Personal Growth */}
                    <AchCard delay={0.2} sage title="Personal Growth" icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
                        </svg>
                    }>
                        <ul className="ach-list">
                            <li><span className="ach-bullet" />Resolved chronic eye strain/TMJ through yoga, meditation & sleep</li>
                            <li><span className="ach-bullet" />Shifted to target-based goals over hourly tracking</li>
                            <li><span className="ach-bullet" />Calisthenics — 60 push-ups in one set</li>
                            <li><span className="ach-bullet" />Overcame financial stress & burnout cycles</li>
                        </ul>
                    </AchCard>

                    {/* Books Read */}
                    <AchCard delay={0.3} title="Books Read This Year" icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}>
                            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                    }>
                        <div className="books-grid">
                            {PERSONAL_BOOKS.map((b, i) => (
                                <div key={i} className="book-item">
                                    <span className="book-num">{i + 1}</span>
                                    {b}
                                </div>
                            ))}
                        </div>
                    </AchCard>
                </div>

                {/* Projects Built */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="glow-card"
                    style={{ marginTop: 24 }}
                >
                    <div className="glow-card-content">
                        <div className="ach-card-title" style={{ color: 'var(--google-blue)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: 500, marginBottom: '16px' }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}>
                                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                            </svg>
                            20+ Web Projects Built  (JavaScript, React, Node.js, GraphQL)
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                            {PROJECTS.map((p, i) => (
                                <a
                                    key={i}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                        padding: '6px 16px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 100,
                                        fontSize: '0.8rem',
                                        color: 'var(--text-inverse)',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--google-blue)'; e.currentTarget.style.color = '#fff' }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-inverse)' }}
                                >
                                    {p.name} ↗
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
