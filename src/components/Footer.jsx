import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-10 border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-slate-500 text-sm"
                >
                    Copyright {year}{" "}
                    <span className="gradient-text font-semibold">Dhruv Gosavi</span>.
                    Built with React, Three.js &amp; love.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="flex items-center gap-2 text-slate-600 text-xs"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Designed &amp; Developed by Dhruv Gosavi
                </motion.div>
            </div>
        </footer>
    );
}
