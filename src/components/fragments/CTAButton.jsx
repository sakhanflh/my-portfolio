import { memo } from "react";

const CTAButton = memo(({ href, text, icon: Icon }) => (
    <a href={href}>
        <button className="group relative w-[160px] md:w-[160px]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
            <div className="relative h-11 bg-black rounded-lg border border-white/10 overflow-hidden">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm transition-all duration-300">
                    <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                        {text}
                    </span>
                    <Icon
                        className={`w-4 h-4 text-gray-200 ${text === "Contact" || "Projects"
                                ? "group-hover:translate-x-1"
                                : "group-hover:rotate-45"
                            } transform transition-all duration-300 z-10`}
                    />
                </span>
            </div>
        </button>
    </a>
));

export default CTAButton;
