import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-500 ${scrolled ? "bg-[#030014]/30 backdrop-blur-lg" : "bg-transparent"
            }`}>
            <div className="flex items-center justify-between h-full px-[4%] max-w-7xl mx-auto">
                <h1 className="text-lg font-semibold gradient-text">
                    senech.dev
                </h1>

                <ul>
                    <li className="flex gap-8">
                        <Link>Home</Link>
                        <Link>About Me</Link>
                        <Link>Projects</Link>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
