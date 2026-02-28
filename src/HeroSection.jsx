import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Galaxy from './Galaxy'

const STATS = [
    { label: 'Days of Learning', value: '365', color: 'indigo' },
    { label: 'Projects Built', value: '20+', color: 'sage' },
    { label: 'Reports Read', value: '2.5K+', color: 'indigo' },
    { label: 'Hours Hunting', value: '450', color: 'sage' },
]

function FloatingCard({ stat, index, mouseX, mouseY, containerRef }) {
    const ref = useRef(null)

    const springConfig = { damping: 22, stiffness: 180 }
    const rx = useSpring(useMotionValue(0), springConfig)
    const ry = useSpring(useMotionValue(0), springConfig)
    const z = useSpring(useMotionValue(0), { damping: 20, stiffness: 120 })

    const handleMouseEnter = () => z.set(12)
    const handleMouseLeave = () => { z.set(0); rx.set(0); ry.set(0) }

    const handleMouseMove = (e) => {
        const card = ref.current
        if (!card) return
        const rect = card.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / (rect.width / 2)
        const dy = (e.clientY - cy) / (rect.height / 2)
        rx.set(dy * -10)
        ry.set(dx * 10)
    }

    const floatVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3.5 + index * 0.7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.4,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            className={`glass stat-card`}
            variants={floatVariants}
            animate="animate"
            style={{ rotateX: rx, rotateY: ry, translateZ: z, perspective: 800 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.97 }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.12}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
        >
            <div className={`stat-number ${stat.color}`}>{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
        </motion.div>
    )
}

export default function HeroSection() {
    const containerRef = useRef(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
    }

    const titleVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    }

    const subVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } },
    }

    return (
        <section className="hero-section" onMouseMove={handleMouseMove} ref={containerRef}>
            <Galaxy
                mouseRepulsion
                mouseInteraction
                density={1}
                glowIntensity={0.3}
                saturation={0}
                hueShift={140}
                twinkleIntensity={0.3}
                rotationSpeed={0.1}
                repulsionStrength={2}
                autoCenterRepulsion={0}
                starSpeed={0.5}
                speed={1}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
            />
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="section-badge"
                    style={{ marginBottom: 28 }}
                >
                    365 DAYS CHALLENGE
                </motion.div>

                <motion.h1
                    className="hero-title"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Twitter{' '}
                    <span className="text-gradient">365 Days</span>
                    <br />
                    Challenge
                </motion.h1>

                <motion.p
                    className="hero-sub"
                    variants={subVariants}
                    initial="hidden"
                    animate="visible"
                >
                    From mechanical engineering graduate to full-stack developer
                    and aspiring bug bounty hunter — a year of transformation.
                </motion.p>

                {/* Floating Stats */}
                <motion.div
                    className="stats-grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                >
                    {STATS.map((stat, i) => (
                        <FloatingCard
                            key={stat.label}
                            stat={stat}
                            index={i}
                            mouseX={mouseX}
                            mouseY={mouseY}
                            containerRef={containerRef}
                        />
                    ))}
                </motion.div>

                {/* Scroll cue */}
                <motion.div
                    className="scroll-cue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="scroll-line" />
                    <span>Scroll to explore</span>
                </motion.div>
            </div>
        </section>
    )
}
