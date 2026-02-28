import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ShapeBlur from './ShapeBlur'

const MISTAKES = [
    {
        icon: '🎯',
        title: 'Wrong Focus — Dev over Hacking',
        text: 'Spent too much time learning software development instead of actively bug hunting. Learning feels like winning but execution is the real game.',
    },
    {
        icon: '📋',
        title: 'Overloaded Task Lists',
        text: 'Led to burnout. Trying to do everything at once meant doing nothing well. Quality focused work beats quantity every time.',
    },
    {
        icon: '💰',
        title: 'Ignoring Financial Stress',
        text: 'Money worries disrupted focus during critical months (Aug 2024, May–Jul 2025). Should have built a buffer before going all-in.',
    },
    {
        icon: '🌙',
        title: 'Late Night Trap',
        text: 'Late nights led to eye issues, then late wake-ups, then messy unproductive days. Sleep optimization is the #1 performance lever.',
    },
    {
        icon: '😤',
        title: 'Going Too Hard on Myself',
        text: 'Pushing too hard led to eye strain and TMJ pain that disrupted months of focus. Sustainable pace > sprint-and-crash cycles.',
    },
    {
        icon: '📊',
        title: 'Only Consistent in Learning',
        text: 'Consistent at reading reports & studying, but not consistently hunting. Knowledge without application is worthless in bug bounty.',
    },
]

const LESSONS = [
    { icon: '⚡', title: 'Deep Work Blocks Win', text: '3–5 hour isolated focused sessions accelerated progress more than 10 scattered hours.' },
    { icon: '🧘', title: 'Health First', text: 'Yoga, meditation, and sleeping on time makes better life, better focus, better results.' },
    { icon: '🏗️', title: 'Build to Learn', text: 'Building web apps (Node.js, React, GraphQL) accelerated understanding of vulnerabilities enormously.' },
    { icon: '🎯', title: 'Execute, Don\'t Just Learn', text: 'Knowledge is useless without application. It\'s not about days or hours — it\'s quality focused work.' },
]

function ShimmerCard({ data, delay, isLesson }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            className="glow-card"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            style={isLesson ? {
                borderColor: 'var(--google-green)',
                position: 'relative', overflow: 'hidden'
            } : { position: 'relative', overflow: 'hidden' }}
        >
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                <ShapeBlur variation={0} pixelRatioProp={window.devicePixelRatio || 1} shapeSize={1} roundness={0.05} borderSize={0.02} circleSize={0.25} circleEdge={1} />
            </div>
            <div className="glow-card-content" style={{ position: 'relative', zIndex: 1 }}>
                <div className="mistake-icon" style={{ fontSize: '2rem', marginBottom: '12px' }}>{data.icon}</div>
                <div className="mistake-title" style={{ color: isLesson ? 'var(--google-green)' : 'var(--google-blue)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '8px' }}>
                    {data.title}
                </div>
                <div className="mistake-text" style={{ color: '#9aa0a6', fontSize: '0.95rem', lineHeight: 1.6 }}>{data.text}</div>
            </div>
        </motion.div>
    )
}

export default function MistakesSection() {
    return (
        <section className="section">
            <div className="container">
                {/* Mistakes */}
                <div className="section-header">
                    <div className="section-badge">Honest Reflection</div>
                    <h2 className="section-title">
                        Mistakes I <span className="text-gradient">Made</span>
                    </h2>
                    <p className="section-desc" style={{ fontStyle: 'italic', opacity: 0.8 }}>
                        As a mechanical graduate who didn't touch a keyboard before this — I don't even call these mistakes. Just costly lessons.
                    </p>
                </div>

                <div className="mistakes-grid" style={{ marginBottom: 80 }}>
                    {MISTAKES.map((m, i) => (
                        <ShimmerCard key={i} data={m} delay={i * 0.08} isLesson={false} />
                    ))}
                </div>

                {/* Divider */}
                <div className="divider" style={{ marginBottom: 80 }} />

                {/* Lessons */}
                <div className="section-header">
                    <div className="section-badge sage">What I Learned</div>
                    <h2 className="section-title">
                        Lessons That <span className="text-gradient">Stuck</span>
                    </h2>
                </div>

                <div className="mistakes-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                    {LESSONS.map((l, i) => (
                        <ShimmerCard key={i} data={l} delay={i * 0.08} isLesson />
                    ))}
                </div>
            </div>
        </section>
    )
}
