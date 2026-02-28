import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TWEETS = [
    {
        type: 'first',
        badge: 'Day 1',
        title: 'First Day',
        subtitle: 'June 14, 2024 — The journey begins',
        img: '/365-days-journey/FirstDayChallenge.png',
        link: 'https://x.com/heyiamuday/status/1801683923203989836',
        accentClass: 'first',
    },
    {
        type: 'last',
        badge: 'Day 365',
        title: 'Last Day',
        subtitle: 'July 7, 2025 — Mission complete',
        img: '/365-days-journey/LastDayChallenge.png',
        link: 'https://x.com/heyiamuday/status/1946313517151518944',
        accentClass: 'last',
    },
]

export default function TweetsSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="section" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">The Proof</div>
                    <h2 className="section-title">
                        First Day <span className="text-gradient">→</span> Last Day
                    </h2>
                    <p className="section-desc">
                        Where it all started and how it all ended — 365 days apart.
                    </p>
                </div>

                <div className="tweets-grid">
                    {TWEETS.map((tweet, i) => (
                        <motion.div
                            key={tweet.type}
                            className="glow-card"
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: i * 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="glow-card-content">
                                <span className={`tweet-badge ${tweet.accentClass}`}>{tweet.badge}</span>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 6 }}>
                                    {tweet.title}
                                </h3>
                                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 20 }}>
                                    {tweet.subtitle}
                                </p>
                                <img src={tweet.img} alt={tweet.title} className="tweet-img" style={{ borderRadius: '12px', width: '100%', marginBottom: '16px' }} />
                                <a href={tweet.link} target="_blank" rel="noopener noreferrer" className="tweet-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--google-blue)', textDecoration: 'none' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    View on X (Twitter)
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
