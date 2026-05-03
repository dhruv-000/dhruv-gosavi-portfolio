import { motion } from "framer-motion";
import { education } from "../constants";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

export default function About() {
    const baseUrl = import.meta.env.BASE_URL;
    const profileImageUrl = `${baseUrl}profile.jpg`;
    const resumeUrl = `${baseUrl}resume.pdf`;

    const highlights = [
        { emoji: "🤖", title: "AI & ML", desc: "Building intelligent systems with Python, Pandas & Machine Learning" },
        { emoji: "⚡", title: "MERN Stack", desc: "MERN stack web apps with MongoDB, Express, React & Node.js" },
        { emoji: "📊", title: "Data Analytics", desc: "Power BI dashboards & SQL-driven insights from real internship" },
        { emoji: "🌲", title: "DSA Focus", desc: "Strong foundation in Data Structures & Algorithms in Python/Java" },
    ];

    return (
        <section id="about" className="section-padding relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
                >
                    {/* Left — Profile Photo + Education */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-8">
                        {/* Photo */}
                        <div className="relative inline-block w-full max-w-sm mx-auto lg:mx-0">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-accentPurple/30 blur-2xl scale-110 pointer-events-none" />
                            <div className="relative rounded-2xl overflow-hidden neon-border bg-[#0a0a1a]">
                                <img
                                    src={profileImageUrl}
                                    alt="Portrait of Dhruv Gosavi"
                                    loading="lazy"
                                    decoding="async"
                                    className="block w-full h-auto"
                                />
                                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl" />
                                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accentPurple rounded-tr" />
                                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accentPink rounded-bl" />
                                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br" />
                            </div>
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute -bottom-4 right-2 sm:-right-4 glass neon-border px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white text-center max-w-[11rem] sm:max-w-none whitespace-normal sm:whitespace-nowrap"
                            >
                                🔥 Open to Opportunities
                            </motion.div>
                        </div>

                        {/* Education */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-accent text-sm font-medium tracking-widest uppercase">Education</h3>
                            {education.map((edu) => (
                                <motion.div
                                    key={edu.degree}
                                    whileHover={{ scale: 1.01 }}
                                    className="glass rounded-xl p-4 border border-white/5"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl mt-0.5">{edu.emoji}</span>
                                        <div>
                                            <div className="text-white font-semibold text-sm">{edu.degree}</div>
                                            <div className="text-slate-400 text-xs mt-0.5">{edu.institution}</div>
                                            <div className="flex gap-3 mt-1.5">
                                                <span className="text-accent text-xs font-medium">{edu.year}</span>
                                                <span className="text-accentPurple text-xs font-medium">{edu.score}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Text */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-6">
                        <div>
                            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                                About Me
                            </p>
                            <h2 className="section-heading text-white mb-4">
                                Turning Data &amp;{" "}
                                <span className="gradient-text">Code Into Impact</span>
                            </h2>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-lg">
                            I'm <span className="text-white font-medium">Dhruv Gosavi</span>, a second-year
                            <span className="text-accent font-medium"> AI &amp; Data Science</span> student at
                            Zeal College of Engineering, Pune (CGPA: 8.98). I have a strong foundation in
                            Machine Learning and MERN Stack Development.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            A proactive problem solver with high proficiency in Python and Java, currently
                            focusing on advanced Data Structures and Algorithms to build scalable, real-world
                            solutions. I've already gained hands-on experience through a Data Analytics
                            internship at SCOOPEN, Pune.
                        </p>

                        {/* Location & contact chips */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                { icon: "📍", text: "Pune, India" },
                                { icon: "📧", text: "gosavi.dhruv10@gmail.com" },
                            ].map(({ icon, text }) => (
                                <span
                                    key={text}
                                    className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-slate-300 border border-white/5 max-w-full break-all"
                                >
                                    <span>{icon}</span> {text}
                                </span>
                            ))}
                        </div>

                        {/* Resume download */}
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 w-fit neon-border text-accent px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/10 transition-colors cursor-none"
                        >
                            📄 Download Resume
                        </a>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mt-2">
                            {highlights.map((h) => (
                                <motion.div
                                    key={h.title}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass rounded-xl p-4 card-hover"
                                >
                                    <div className="text-2xl mb-2">{h.emoji}</div>
                                    <div className="text-white font-semibold text-sm mb-1">{h.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{h.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
