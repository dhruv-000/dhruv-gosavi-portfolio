import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [cursorState, setCursorState] = useState("default"); // default, hover, click, hidden
    const [isMobile, setIsMobile] = useState(false);

    // Mouse positions
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the trailing ring
    const ringX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const ringY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    useEffect(() => {
        // Detect mobile - we don't want custom cursor on touch devices
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 1024px)").matches || 'ontouchstart' in window);
        };
        checkMobile();

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (cursorState === "hidden") setCursorState("default");
        };

        const handleMouseDown = () => setCursorState("click");
        const handleMouseUp = () => setCursorState("default");
        const handleMouseLeave = () => setCursorState("hidden");

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.closest("a, button, input, textarea, [data-cursor]")) {
                setCursorState("hover");
            } else {
                setCursorState("default");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorState]);

    if (isMobile) return null;

    const dotVariants = {
        default: { scale: 1, opacity: 1 },
        hover: { scale: 1.5, opacity: 0.3 },
        click: { scale: 0.8, opacity: 1 },
        hidden: { scale: 0, opacity: 0 }
    };

    const ringVariants = {
        default: { scale: 1, opacity: 0.6 },
        hover: { scale: 1.8, opacity: 0.15 },
        click: { scale: 0.9, opacity: 0.8 },
        hidden: { scale: 0, opacity: 0 }
    };

    return (
        <>
            {/* The small central dot */}
            <motion.div
                className="cursor-dot"
                variants={dotVariants}
                animate={cursorState}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* The trailing smooth ring */}
            <motion.div
                className="cursor-ring"
                variants={ringVariants}
                animate={cursorState}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
