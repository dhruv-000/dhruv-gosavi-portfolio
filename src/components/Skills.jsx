import { motion } from "framer-motion";
import { skillCategories } from "../constants";

const skillAccentOverrides = {
    "#3572a5": "#60A5FA",
    "#68a063": "#86EFAC",
};

const getSkillAccent = (color) => {
    const key = color.toLowerCase();
    return skillAccentOverrides[key] || color;
};

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                        What I Know
                    </p>
                    <h2 className="section-heading text-white">
                        Skills &amp; <span className="gradient-text">Technologies</span>
                    </h2>
                </motion.div>

                {/* Categories */}
                <div className="flex flex-col gap-8">
                    {skillCategories.map((cat, ci) => {
                        const accent = getSkillAccent(cat.color);

                        return (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: ci * 0.08 }}
                                className="glass card-hover rounded-2xl p-5 sm:p-6 overflow-hidden"
                                style={{
                                    background: `linear-gradient(120deg, ${accent}16 0%, rgba(255,255,255,0.04) 55%, rgba(5,8,22,0.48) 100%)`,
                                    borderLeft: `3px solid ${accent}AA`,
                                    border: `1px solid ${accent}4D`,
                                    boxShadow: `0 12px 32px ${accent}14`,
                                }}
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{cat.emoji}</span>
                                    <h3
                                        className="font-bold text-lg"
                                        style={{ color: accent, textShadow: `0 0 14px ${accent}33` }}
                                    >
                                        {cat.category}
                                    </h3>
                                </div>

                                {/* Skills list */}
                                <div className="flex flex-wrap gap-2.5">
                                    {cat.skills.map((skill, si) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: ci * 0.06 + si * 0.04 }}
                                            whileHover={{ scale: 1.06, y: -2 }}
                                            className="px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium cursor-default max-w-full break-words"
                                            style={{
                                                background: `${accent}22`,
                                                border: `1px solid ${accent}75`,
                                                color: accent,
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
