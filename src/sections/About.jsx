import { LuArrowUpRight, LuSparkles } from "react-icons/lu";
import { FaAward, FaCode, FaGlobe, FaQuoteLeft } from "react-icons/fa";
import { LiaFileAltSolid } from "react-icons/lia";
import { memo, useMemo } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function About() {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const statRefs = useRef([]);

    useEffect(() => {
        // Text masuk dari kiri
        gsap.fromTo(
            textRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 70%", // mulai animasi saat elemen 80% muncul di viewport
                },
            }
        );

        // Image masuk dari kanan
        gsap.fromTo(
            imageRef.current,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 70%",
                },
            }
        );

        // Stat cards muncul 1-1
        statRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.2, // animasi berurutan
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                }
            );
        });
    }, []);


    const ProfileImage = memo(() => (
        <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
            <div className="relative group">
                {/* Background gradients (desktop only) */}
                <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50 pointer-events-none" />
                </div>

                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                    {/* Border effect */}
                    <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105 pointer-events-none" />

                    {/* Overlay effects (desktop only) */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block pointer-events-none" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block pointer-events-none" />

                    {/* Profile image */}
                    <img
                        src="/image/sak.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                        loading="lazy"
                    />

                    {/* Advanced hover effects - desktop only */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block pointer-events-none">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                        <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                    </div>
                </div>
            </div>
        </div>
    ));


    const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
        <div data-aos={animation} data-aos-duration={1300} className="relative group">
            <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
                <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

                <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span
                        className="text-4xl font-bold text-white"
                        data-aos="fade-up-left"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {value}
                    </span>
                </div>

                <div>
                    <p
                        className="text-sm uppercase tracking-wider text-gray-300 mb-2"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {label}
                    </p>
                    <div className="flex items-center justify-between">
                        <p
                            className="text-xs text-gray-400"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {description}
                        </p>
                        <LuArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    ));

    const statsData = useMemo(() => [
        {
            icon: FaCode,
            color: "from-[#6366f1] to-[#a855f7]",
            label: "Total Projects",
            description: "Innovative web solutions crafted",
            animation: "fade-right",
            value: 9,
        },
        {
            icon: FaAward,
            color: "from-[#a855f7] to-[#6366f1]",
            label: "Certificates",
            description: "Professional skills validated",
            animation: "fade-up",
            value: 2,
        },
        {
            icon: FaGlobe,
            color: "from-[#6366f1] to-[#a855f7]",
            label: "Years of Experience",
            description: "Continuous learning journey",
            animation: "fade-left",
            value: "1",
        },
    ], []);
    return (
        <div className="mt-20 " id="About">
            <div  className="text-center ">
                <h1 className="text-3xl md:text-5xl font-semibold gradient-text inline-block">About Me</h1>
                <span className="flex items-center gap-2 text-center justify-center">
                    <LuSparkles className="text-purple-400" />
                    <p className="text-sm md:text-xl text-slate-300">Transforming ideas into digital experiences</p>
                    <LuSparkles className="text-cyan-400" />
                </span>
            </div>


            <div className="mt-8 md:mt-20">
                <div className="flex flex-col-reverse md:flex-row relative">
                    <div ref={textRef} className="w-full mt-10 md:mt-0 md:w-1/2">
                        <span className="text-3xl md:text-5xl text-start font-semibold">
                            <h2 className="gradient-text inline-block">Hello, I'm</h2>
                            <h2>Sakha Naufal Huda</h2>
                        </span>
                        <p className="text-justify text-xl text-slate-400">I am an Informatics Engineering graduate with a strong interest in Front-End development. My focus is on creating engaging, responsive, and user friendly digital experiences, while always striving to deliver the best solutions in every project I work on.</p>
                        <div
                            className="relative bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 border border-gradient-to-r border-[#6366f1]/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden"
                        >
                            {/* Floating orbs background */}
                            <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-r from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-lg"></div>

                            <div className="absolute top-3 left-4 text-[#6366f1] opacity-30">
                                <FaQuoteLeft />
                            </div>

                            <blockquote className="text-gray-300 text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
                                "Just coding, keep growing, and always keep learning."
                            </blockquote>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                            <a href="https://drive.google.com/drive/folders/1BOm51Grsabb3zj6Xk27K-iRwI1zITcpo" className="w-full lg:w-auto">
                                <button
                                    className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-purple-500/70 to-cyan-600/70 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl "
                                >
                                    <LiaFileAltSolid className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                                </button>
                            </a>
                            <a href="#Portofolio" className="w-full lg:w-auto">
                                <button
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 "
                                >
                                    <FaCode className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                                </button>
                            </a>
                        </div>
                    </div>
                    <div ref={imageRef} className="w-full md:w-1/2 flex justify-center">
                        <ProfileImage />
                    </div>
                </div>
                <a href="#Portofolio">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
                        {statsData.map((stat) => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </a>
            </div>
        </div>
    )
}