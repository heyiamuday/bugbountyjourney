import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import JunMayImg from './assets/Jun-May.png'
import JulDecImg from './assets/Jul-Dec.png'

const TRACKS = [
    {
        id: 'track1',
        label: 'Jun 2024 – May 2025 (12 Months)',
        badge: 'Phase 1',
        images: [
            { src: JunMayImg, caption: 'Jun 2024 – May 2025 · The Full Year' },
        ],
    },
    {
        id: 'track2',
        label: 'Jun 2025 – Dec 2025 (6 Months)',
        badge: 'Phase 2',
        images: [
            { src: JulDecImg, caption: 'Jun 2025 – Dec 2025 · Final Sprint' },
        ],
    },
]

function Track({ track, direction }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction === 'left' ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 40 }}
        >
            <div style={{ paddingLeft: 24, marginBottom: 16 }}>
                <span className="section-badge sage" style={{ marginBottom: 8 }}>{track.badge}</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{track.label}</p>
            </div>

            <div className="timeline-track">
                <div className="track-inner">
                    {track.images.map((img, i) => (
                        <motion.div
                            key={i}
                            className="timeline-img-wrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            whileHover={{ y: -6, boxShadow: '0 0 30px rgba(99,102,241,0.25)' }}
                        >
                            <img src={img.src} alt={img.caption} />
                            <div className="timeline-label">{img.caption}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function TimelineSection() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Journey Timeline</div>
                    <h2 className="section-title">
                        18 Months of{' '}
                        <span className="text-gradient">Relentless Growth</span>
                    </h2>
                    <p className="section-desc">
                        Two distinct phases — each one a story of consistency, learning, and iteration.
                    </p>
                </div>
            </div>

            <div className="timeline-grid">
                {TRACKS.map((track, i) => (
                    <Track key={track.id} track={track} direction={i % 2 === 0 ? 'left' : 'right'} />
                ))}
            </div>
        </section>
    )
}
