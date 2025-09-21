import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Hero } from "../sections/Hero";
import { Portfolio } from "../sections/Portfolio";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </>
    );
}
