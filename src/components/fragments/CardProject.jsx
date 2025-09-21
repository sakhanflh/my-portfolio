import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export default function CardProject({ Img, Title, Description, Link, scroll }) {
    return (
        <div className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            {/* Screenshot container */}
            <div className="h-80 overflow-hidden rounded-lg mb-4 relative">
                <img
                    src={Img}
                    alt={Title}
                    className={`w-full object-cover transition-transform ease-linear
                        ${scroll ? "duration-[8000ms] group-hover:-translate-y-[50%]" : ""}`}
                />

                {/* Overlay kalau scroll = false */}
                {!scroll && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white font-semibold">No scroll animation</p>
                    </div>
                )}
            </div>

            <h3 className="text-xl font-semibold text-slate-300">{Title}</h3>
            <p className="text-slate-400 line-clamp-2 mt-2">{Description}</p>

            <div className="mt-5 flex items-center justify-between">
                {Link && (
                    <a
                        href={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link"
                    >
                        <span className="flex items-center gap-2 text-purple-500/70 font-semibold group-hover/link:text-purple-500 transition-colors duration-300">
                            <p>Live Demo</p>
                            <FaExternalLinkAlt className="group-hover/link:rotate-45 transform transition-transform duration-300" />
                        </span>
                    </a>
                )}

                <button className="flex items-center gap-2 py-1 px-3 rounded-lg bg-gray-600/30 hover:bg-gray-600/50 hover:scale-105 transition-all duration-300 text-slate-400 hover:text-slate-100">
                    <p className="transition-all duration-300">Details</p>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
