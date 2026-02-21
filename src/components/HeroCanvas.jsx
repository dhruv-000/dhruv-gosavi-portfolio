import { motion } from "framer-motion";

const techBadges = [
    { label: "Python", color: "#3572A5", emoji: "🐍", delay: 0 },
    { label: "React", color: "#61dafb", emoji: "⚛️", delay: 0.1 },
    { label: "Machine Learning", color: "#ff6b6b", emoji: "🤖", delay: 0.2 },
    { label: "Power BI", color: "#f2c811", emoji: "📊", delay: 0.3 },
    { label: "Node.js", color: "#68a063", emoji: "🟢", delay: 0.4 },
    { label: "Java", color: "#f89820", emoji: "☕", delay: 0.5 },
    { label: "MongoDB", color: "#4db33d", emoji: "🍃", delay: 0.6 },
    { label: "DSA", color: "#915EFF", emoji: "🌲", delay: 0.7 },
];

const floatAnim = (yRange, duration) => ({
    animate: { y: yRange, transition: { repeat: Infinity, repeatType: "reverse", duration, ease: "easeInOut" } },
});

export default function HeroVisual() {
    const profileImageUrl = `${import.meta.env.BASE_URL}profile.jpg`;

    return (
        <div className="relative w-full h-[480px] lg:h-[580px] flex items-center justify-center select-none">

            {/* ── Glow rings ───────────────────────────────────────── */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute w-80 h-80 rounded-full border border-accent/15"
                style={{ boxShadow: "0 0 40px rgba(0,217,255,0.06)" }}
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                className="absolute w-96 h-96 rounded-full border border-accentPurple/10"
                style={{ borderStyle: "dashed" }}
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="absolute w-[26rem] h-[26rem] rounded-full border border-white/5"
            />

            {/* ── Central profile card ─────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                {...floatAnim([0, -12, 0], 4)}
                className="relative w-52 h-52 rounded-3xl overflow-hidden z-10"
                style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(0,217,255,0.25)",
                    boxShadow: "0 0 40px rgba(0,217,255,0.12), 0 0 80px rgba(145,94,255,0.08)",
                }}
            >
                <img
                    src={profileImageUrl}
                    alt="Portrait of Dhruv Gosavi"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3"
                    style={{ background: "linear-gradient(to top, rgba(5,8,22,0.95), transparent)" }}>
                    <p className="text-white font-bold text-sm text-center">Dhruv Gosavi</p>
                    <p className="text-accent text-[10px] text-center font-medium">AI & Data Science</p>
                </div>
                {/* Corner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accentPurple/5 pointer-events-none" />
            </motion.div>

            {/* ── CGPA badge — top right ────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                {...floatAnim([0, -8, 0], 3.5)}
                className="absolute top-10 right-4 lg:right-0 z-20"
                style={{
                    background: "rgba(0,217,255,0.08)",
                    border: "1px solid rgba(0,217,255,0.25)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "16px",
                    padding: "10px 14px",
                }}
            >
                <div className="text-center">
                    <div className="text-accent text-xl font-black">8.98</div>
                    <div className="text-slate-400 text-[10px] font-medium">CGPA</div>
                </div>
            </motion.div>

            {/* ── Internship badge — top left ───────────────────────── */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                {...floatAnim([0, -6, 0], 4.2)}
                className="absolute top-12 left-4 lg:left-0 z-20 max-w-[160px]"
                style={{
                    background: "rgba(145,94,255,0.08)",
                    border: "1px solid rgba(145,94,255,0.25)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "16px",
                    padding: "10px 14px",
                }}
            >
                <div className="text-[10px] text-slate-400 font-medium">💼 Internship</div>
                <div className="text-white text-xs font-semibold mt-0.5 leading-tight">Data Analytics</div>
                <div className="text-accentPurple text-[10px]">SCOOPEN, Pune</div>
            </motion.div>

            {/* ── College badge — bottom left ───────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                {...floatAnim([0, -7, 0], 5)}
                className="absolute bottom-12 left-0 lg:-left-4 z-20 max-w-[190px]"
                style={{
                    background: "rgba(5,8,22,0.8)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "16px",
                    padding: "10px 14px",
                }}
            >
                <div className="text-[10px] text-slate-400">🎓 Pursuing</div>
                <div className="text-white text-xs font-semibold mt-0.5 leading-tight">B.Tech AI & Data Science</div>
                <div className="text-accent text-[10px] mt-0.5">Zeal College, Pune</div>
            </motion.div>

            {/* ── Tech badge orbit ─────────────────────────────────── */}
            {techBadges.map((badge, i) => {
                const angle = (i / techBadges.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 210;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={badge.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: badge.delay + 0.8, duration: 0.5, type: "spring" }}
                        style={{
                            position: "absolute",
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)",
                            background: `${badge.color}10`,
                            border: `1px solid ${badge.color}35`,
                            backdropFilter: "blur(8px)",
                            borderRadius: "999px",
                            padding: "5px 10px",
                            zIndex: 15,
                            whiteSpace: "nowrap",
                        }}
                    >
                        <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5 + i * 0.3, ease: "easeInOut" }}
                            className="flex items-center gap-1.5 text-[11px] font-medium"
                            style={{ color: badge.color }}
                        >
                            {badge.emoji} {badge.label}
                        </motion.span>
                    </motion.div>
                );
            })}

            {/* ── Dot particles (decorative) ────────────────────────── */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: i % 2 === 0 ? 4 : 6,
                        height: i % 2 === 0 ? 4 : 6,
                        background: i % 3 === 0 ? "#00d9ff" : i % 3 === 1 ? "#915EFF" : "#ff4d8d",
                        opacity: 0.4,
                        left: `${15 + i * 14}%`,
                        top: `${10 + (i % 4) * 20}%`,
                    }}
                    animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}
