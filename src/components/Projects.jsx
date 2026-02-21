import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
            <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#00d9ff"
                className="h-full"
            >
                <div className="glass rounded-2xl overflow-hidden h-full flex flex-col group card-hover">
                    <div
                        className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
                    >
                        <span className="text-6xl z-10">{project.emoji}</span>
                        <div className="absolute inset-0 bg-grid opacity-20" />
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:gradient-text transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed flex-1">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                                    style={{
                                        background: "rgba(0,217,255,0.08)",
                                        color: "#00d9ff",
                                        border: "1px solid rgba(0,217,255,0.2)",
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-5">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${project.title} GitHub repository`}
                                className="inline-flex items-center justify-center neon-border rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-accent hover:bg-accent/10 transition-colors cursor-none"
                            >
                                GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${project.title} live demo`}
                                className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-white border border-white/20 hover:border-accentPurple hover:text-accentPurple transition-colors cursor-none"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                        My Work
                    </p>
                    <h2 className="section-heading text-white">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-xl mx-auto">
                        Each project is a unique challenge tackled with creativity, modern tooling,
                        and relentless attention to detail.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/dhruv-000"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 neon-border text-accent px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/10 transition-colors cursor-none"
                    >
                        View All Projects on GitHub
                        <span className="text-base">-&gt;</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
