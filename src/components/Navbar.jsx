import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
    const MOBILE_MENU_CLOSE_MS = 280;
    const NAV_SCROLL_OFFSET = 10;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const scrollToSection = () => {
            const el = document.getElementById(id);
            if (!el) return;

            const navHeight = navRef.current?.getBoundingClientRect().height ?? 0;
            const targetTop =
                window.scrollY + el.getBoundingClientRect().top - navHeight - NAV_SCROLL_OFFSET;

            window.scrollTo({
                top: Math.max(targetTop, 0),
                behavior: "smooth",
            });
        };

        if (menuOpen) {
            setMenuOpen(false);
            window.setTimeout(scrollToSection, MOBILE_MENU_CLOSE_MS);
            return;
        }

        scrollToSection();
    };

    return (
        <motion.nav
            ref={navRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark py-2.5 sm:py-3 shadow-lg" : "py-4 sm:py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="font-display font-bold text-lg sm:text-xl tracking-tight cursor-none"
                >
                    <span className="gradient-text">{"<"}</span>
                    <span className="text-white">DEV</span>
                    <span className="gradient-text">{"/>"}</span>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <li key={link.id}>
                            <motion.button
                                onClick={() => scrollTo(link.id)}
                                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group cursor-none"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                            >
                                <span className="text-accent mr-1 text-xs">0{i + 1}.</span>
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent to-accentPurple group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        </li>
                    ))}
                    <motion.a
                        href={resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="neon-border px-4 py-2 rounded text-accent text-sm font-medium hover:bg-accent/10 transition-colors cursor-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Resume
                    </motion.a>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2 cursor-none"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen
                                ? i === 0
                                    ? "translate-y-2 rotate-45"
                                    : i === 1
                                        ? "opacity-0"
                                        : "-translate-y-2 -rotate-45"
                                : ""
                                }`}
                        />
                    ))}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-dark border-t border-white/5 overflow-hidden"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link, i) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className="text-slate-300 hover:text-white transition-colors w-full text-left cursor-none"
                                    >
                                        <span className="text-accent text-xs mr-2">0{i + 1}.</span>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
