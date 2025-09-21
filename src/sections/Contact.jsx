import { FaMailBulk, FaUser } from "react-icons/fa";
import { LuMessageSquare, LuSend, LuShare2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

export function Contact() {
    return (
        <div className="mt-30">
            <div
                className="text-center pb-10"
            >
                <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto gradient-text">
                    Contact Me
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                    Have something to discuss? Send me a message and let's talk.
                </p>
            </div>

            <div className="gap-20 flex">
                <div
                    className="w-1/2 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-[#6366f1]/10"
                >
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-3 gradient-text inline-block">
                                Get in touch.
                            </h2>
                            <p className="text-gray-400">
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
                <div className="w-1/2 border">
                    <p>tes</p>
                </div>
            </div>


        </div>
    )
}