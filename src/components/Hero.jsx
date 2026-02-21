import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ROLES = [
    "AI & Data Science Student",
    "MERN Stack Developer",
    "Data Analytics Enthusiast",
    "Python Developer",
];

export default function Hero() {
    const roleRef = useRef(null);

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        const type = () => {
            const current = ROLES[roleIndex];
            if (!roleRef.current) return;

            if (!isDeleting) {
                roleRef.current.textContent = current.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    timeout = setTimeout(type, 2000);
                    return;
                }
            } else {
                roleRef.current.textContent = current.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % ROLES.length;
                }
            }
            timeout = setTimeout(type, isDeleting ? 55 : 90);
        };

        // GSAP reveal
        timeout = setTimeout(type, 1200);

        return () => clearTimeout(timeout);
    }, []);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-52 h-52 sm:w-96 sm:h-96 bg-accentPurple/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-44 h-44 sm:w-80 sm:h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center w-full pt-20 sm:pt-24 pb-14 sm:pb-16">
                <div className="flex flex-col gap-5 sm:gap-6 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-2 sm:gap-3 px-2"
                    >
                        <span className="h-px w-6 sm:w-10 bg-accent" />
                        <span className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase">
                            Welcome to my portfolio
                        </span>
                        <span className="h-px w-6 sm:w-10 bg-accent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    >
                        <h1 className="font-display text-3xl xs:text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-2">
                            <span className="text-white block">Hi, I'm</span>
                            <span className="gradient-text block mt-1">Dhruv Gosavi</span>
                        </h1>
                        <div className="flex items-center gap-2 mt-4 min-h-[2.5rem] flex-wrap justify-center">
                            <span className="text-slate-400 text-base sm:text-xl font-medium">I am a</span>
                            <span ref={roleRef} className="text-base sm:text-xl font-bold neon-text" />
                            <span className="w-0.5 h-5 bg-accent animate-pulse" />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl px-2"
                    >
                        Second-year <span className="text-white font-medium">AI &amp; Data Science</span> student
                        at Zeal College of Engineering, Pune. Building the future with{" "}
                        <span className="text-accent font-medium">MERN Stack</span>,{" "}
                        <span className="text-accentPurple font-medium">Machine Learning</span>, and a passion
                        for clean, scalable code.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap gap-3 sm:gap-4 mt-2 justify-center"
                    >
                        <button
                            onClick={scrollToAbout}
                            className="group relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm overflow-hidden cursor-none"
                            style={{ background: "linear-gradient(135deg, #00d9ff, #915EFF)" }}
                        >
                            <span className="relative z-10 text-white">Explore My Work</span>
                            <span
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: "linear-gradient(135deg, #915EFF, #ff4d8d)" }}
                            />
                        </button>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm neon-border text-accent hover:bg-accent/10 transition-all duration-300 cursor-none"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-4 border-t border-white/5 mt-2"
                    >
                        {[
                            { num: "8.98", label: "CGPA" },
                            { num: "4+", label: "Projects" },
                            { num: "23+", label: "Technologies" },
                        ].map(({ num, label }) => (
                            <div key={label} className="min-w-[74px]">
                                <div className="text-2xl font-black gradient-text">{num}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>


            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            >
                <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1">
                    <motion.div
                        className="w-1 h-2 rounded-full bg-accent"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
