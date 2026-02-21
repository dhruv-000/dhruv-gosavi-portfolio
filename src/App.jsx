import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import StarsBackground from "./components/StarsBackground";

function App() {
    useEffect(() => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
            import("gsap").then(({ gsap }) => {
                gsap.registerPlugin(ScrollTrigger);
            });
        });
    }, []);

    return (
        <div className="relative overflow-x-hidden" style={{ background: "#050816" }}>
            <CustomCursor />
            <StarsBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
