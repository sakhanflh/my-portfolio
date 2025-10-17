import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { memo, useState } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaUser } from "react-icons/fa";
import { LuMessageSquare, LuSend, LuShare2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";


export function Contact() {
    const [isHovering, setIsHovering] = useState(false)
    const lottieOptions = {
        src: "/mail.lottie",
        loop: true,
        autoplay: true,
        renderersettings: {
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
        },
        style: { width: "100%", height: "100%" },
        className: `w-full h-full transition-all duration-500 ${isHovering
            ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
            : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
            }`
    };

    const SocialLink = memo(({ icon: Icon, link, text }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group">
            <button className="relative p-3">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500  to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
            </button>
            <p className="text-center text-gray-400 transition-colors font-medium gradient-text contrast-60 group-hover:contrast-120">{text}</p>
        </a>
    ));

    const SOCIAL_LINKS = [
        { icon: FaGithub, link: "https://github.com/sakhanflh",text: "GitHub" },
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/sakha-naufal-huda-94996a242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", text: "LinkedIn" },
        { icon: FaInstagram, link: "https://www.instagram.com/sakhanflh?igsh=MWx0a2pucWZ6b2E4eg==", text: "Instagram" },
        { icon: FaDiscord, link: "https://discord.gg/wXsRHUsP", text: "Discord" },
        { icon: SiGmail, link: "mailto:sakhanaufal2@gmail.com", text: "Gmail" },

    ];
    return (
        <div className="mt-30 " id="Contact">
            <div
                className="text-center pb-10"
            >
                <h4 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto gradient-text">
                    Contact Me
                </h4>
                <p className="text-slate-400 max-w-2xl mx-auto mt-2">
                    Have something to discuss? Send me a message and let's talk.
                </p>
            </div>

            <div className="gap-20 flex flex-col-reverse md:flex-row">
                <div
                    className="w-full md:w-1/2 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-[#6366f1]/10"
                >
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold mb-3 gradient-text inline-block">
                                Get in touch.
                            </p>
                            <p className="text-gray-400 text-sm md:text-base">
                                Anything you'd like to discuss? Send me a message and let's talk.
                            </p>
                        </div>
                        <MdEmail className="w-10 h-10 text-cyan-600/90" />
                    </div>

                    <form
                        className="space-y-6"
                    >
                        <div
                            className="relative group"
                        >
                            <FaUser className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                                required
                            />
                        </div>
                        <div
                            className="relative group"
                        >
                            <FaMailBulk className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                                required
                            />
                        </div>
                        <div
                            className="relative group"
                        >
                            <LuMessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500/70 to-cyan-600/70 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <LuSend className="w-5 h-5" />
                            <p>Send Message</p>
                        </button>
                    </form>

                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
                    <div className="overflow-hidden">
                        <DotLottieReact {...lottieOptions} />
                    </div>
                    <div className="">
                        <p className="text-xl md:text-3xl italic gradient-text font-medium contrast-60 hover:contrast-120 transition-all duration-300">“Let’s work together to build something amazing!”</p>
                    </div>
                    <div className="hidden lg:flex gap-5 justify-start">
                        {SOCIAL_LINKS.map((social, index) => (
                            <SocialLink key={index} {...social} />
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}