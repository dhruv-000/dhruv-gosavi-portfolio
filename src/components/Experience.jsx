import { motion } from "framer-motion";
import { experience } from "../constants";

export default function Experience() {
    const fallbackCertificateUrl = `${import.meta.env.BASE_URL}certificate.pdf`;

    return (
        <section id="experience" className="section-padding relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                        Work History
                    </p>
                    <h2 className="section-heading text-white">
                        My <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative flex flex-col gap-8">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accentPurple to-transparent hidden sm:block" />

                    {experience.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="sm:pl-20 relative"
                        >
                            {/* Circle on timeline */}
                            <div className="absolute left-4 top-5 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accentPurple items-center justify-center text-lg hidden sm:flex shadow-neon">
                                {exp.emoji}
                            </div>

                            <div className="glass rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                                        <p className="text-accent font-medium text-sm mt-0.5">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-1">
                                        <span className="inline-flex items-center gap-1.5 bg-accentPurple/10 text-accentPurple text-xs font-semibold px-3 py-1 rounded-full border border-accentPurple/20">
                                            {exp.type}
                                        </span>
                                        <span className="text-slate-500 text-xs">📍 {exp.location}</span>
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-2.5">
                                    {exp.points.map((point, pi) => (
                                        <li key={pi} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                                            <span className="text-accent mt-1 flex-shrink-0">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Certificate link */}
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <a
                                        href={exp.certificateUrl || fallbackCertificateUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-xs text-accentPurple hover:text-accent transition-colors cursor-none font-medium"
                                    >
                                        🏆 View Internship Certificate →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
