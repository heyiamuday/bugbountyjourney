import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ShapeBlur from './ShapeBlur'

export default function CTASection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="cta-section" ref={ref}>
            <div className="container">
                <motion.div
                    className="glow-card"
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                        <ShapeBlur variation={0} pixelRatioProp={window.devicePixelRatio || 1} shapeSize={1} roundness={0.05} borderSize={0.02} circleSize={0.25} circleEdge={1} />
                    </div>
                    <div className="glow-card-content" style={{ alignItems: 'center', textAlign: 'center', padding: '60px 40px', position: 'relative', zIndex: 1 }}>
                        <div className="section-badge" style={{ position: 'relative', zIndex: 1, marginBottom: '24px' }}>What's Next</div>

                        <h2 className="cta-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                            Ready to Follow My{' '}
                            <span className="text-gradient">Next Journey</span>?
                        </h2>

                        <p className="cta-desc" style={{ color: '#9aa0a6', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            Now I'm applying everything I learned to become a professional bug bounty hunter —
                            using the 12 Week Year methodology. The hunt is on.
                        </p>

                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                            <motion.a
                                href="https://x.com/heyiamuday"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    padding: '16px 32px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    borderRadius: 9999,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                Follow on X (Twitter)
                            </motion.a>

                            <motion.a
                                href="https://github.com/heyiamuday"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    padding: '16px 32px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'var(--text-inverse)',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    borderRadius: 9999,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'var(--google-blue)'; e.currentTarget.style.color = '#fff' }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-inverse)' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                View GitHub
                            </motion.a>
                        </div>

                        {/* Footer note */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 }}
                            style={{
                                marginTop: 40,
                                fontSize: '0.85rem',
                                color: '#5f6368',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            Twitter 365 Days Challenge · Jun 2024 – Jul 2025 · Built with ♥ and relentlessness
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
