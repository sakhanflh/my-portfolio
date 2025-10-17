import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TextType from "../components/fragments/TextType";
import { memo, useState, useEffect, useRef } from "react";
import CTAButton from "../components/fragments/CTAButton";
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import RotatingText from "../components/fragments/RotatingText";
import { SiGmail } from "react-icons/si";
import gsap from "gsap";

export function Hero() {
    const [isHovering, setIsHovering] = useState(false);

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            leftRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
            rightRef.current,
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
        );
    }, []);

    const lottieOptions = {
        src: "/coding-slide.lottie",
        loop: true,
        autoplay: true,
        renderersettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
        },
        style: { width: "100%", height: "100%" },
        className: `w-full h-full transition-all duration-500 ${isHovering
                ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
                : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
            }`,
    };

    const SocialLink = memo(({ icon: Icon, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="group relative p-3">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500  to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
            </button>
        </a>
    ));

    const SOCIAL_LINKS = [
        { icon: FaGithub, link: "https://github.com/sakhanflh" },
        {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/sakha-naufal-huda-94996a242",
        },
        { icon: FaInstagram, link: "https://www.instagram.com/sakhanflh" },
        { icon: SiGmail, link: "mailto:sakhanaufal2@gmail.com" },
    ];

    return (
        <div
            className="flex mt-20 space-y-5 flex-col md:flex-row items-center md:justify-between"
            id="Home"
        >
            {/* Bagian kiri */}
            <div ref={leftRef} className="w-full md:w-1/2 space-y-5 opacity-0">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">Creative</p>
                    <RotatingText
                        texts={["Thinking", "Coding", "Solving", "Implementation!"]}
                        mainClassName="px-2 font-semibold sm:px-2 md:px-3 bg-violet-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    />
                </div>
                <p className="text-6xl lg:text-7xl font-semibold">
                    Frontend <br /> <span className="gradient-text">Developer</span>
                </p>
                <TextType
                    text={[
                        "Let's Build the Future Together",
                        "Transforming Ideas into Digital Reality",
                        "Code Today, Inspire Tomorrow",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
                <div className="flex gap-2 flex-wrap">
                    {["React", "Javascript", "Node.js", "Tailwind"].map((tech) => (
                        <span
                            key={tech}
                            className="relative px-[2px] py-[2px] rounded-2xl bg-gradient-to-r from-purple-500/30 to-cyan-500/30 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 "
                        >
                            <span className="block rounded-xl md:rounded-2xl px-4 py-2 md:px-5 md:py-2 bg-black text-white text-sm hover:bg-black/80">
                                {tech}
                            </span>
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 justify-center md:justify-start">
                    <CTAButton href="#Portfolio" text="Projects" icon={FaCode} />
                    <CTAButton href="#Contact" text="Contact" icon={HiMail} />
                </div>

                <div className="hidden sm:flex gap-4 justify-start">
                    {SOCIAL_LINKS.map((social, index) => (
                        <SocialLink key={index} {...social} />
                    ))}
                </div>
            </div>

            <div
                ref={rightRef}
                className="md:w-1/2 h-52 md:h-auto overflow-hidden flex justify-center w-full items-center opacity-0"
            >
                <div className="">
                    <DotLottieReact {...lottieOptions} />
                </div>
            </div>
        </div>
    );
}
