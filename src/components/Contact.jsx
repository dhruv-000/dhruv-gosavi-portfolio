import { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "../constants";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const EMAIL = "gosavi.dhruv10@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section-padding relative z-10">
            {/* Background blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[260px] sm:h-[400px] bg-accentPurple/8 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                        Get In Touch
                    </p>
                    <h2 className="section-heading text-white">
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-lg mx-auto text-lg">
                        Whether you have a project in mind, a question, or just want to say hi -
                        my inbox is always open.
                    </p>
                </motion.div>

                {/* Contact card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="glass rounded-3xl p-6 sm:p-8 lg:p-12 text-center"
                    style={{ border: "1px solid rgba(0,217,255,0.15)" }}
                >
                    {/* Email */}
                    <div className="mb-10">
                        <p className="text-slate-400 text-sm mb-4">My inbox</p>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleCopy}
                            className="group inline-flex items-center gap-2 sm:gap-3 cursor-none max-w-full"
                        >
                            <span className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-white group-hover:gradient-text transition-all duration-300 break-all sm:break-normal">
                                {EMAIL}
                            </span>
                            <span className="text-xs sm:text-sm transition-all duration-200 text-accent font-semibold">
                                {copied ? "Copied" : "Copy"}
                            </span>
                        </motion.button>
                        <motion.p
                            initial={false}
                            animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : -8 }}
                            transition={{ duration: 0.2 }}
                            className="text-accent text-sm mt-2"
                        >
                            Copied to clipboard!
                        </motion.p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="flex-1 h-px bg-white/5" />
                        <span className="text-slate-500 text-xs">or reach out via</span>
                        <div className="flex-1 h-px bg-white/5" />
                    </div>

                    {/* Social links */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {socials.map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex w-full xs:w-auto justify-center items-center gap-2.5 glass px-5 py-3 rounded-2xl text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-none"
                                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                            >
                                <span className="text-xl">{social.icon}</span>
                                {social.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
