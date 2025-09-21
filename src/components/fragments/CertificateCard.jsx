import { useState } from "react";
import { MdFullscreen } from "react-icons/md";

export function CertificateCard({ ImgSertif }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Card */}
            <div
                onClick={() => setIsOpen(true)}
                className="group relative cursor-pointer bg-white/5 border border-white/10 rounded-xl p-4 hover:scale-[1.02] transition-all duration-300"
            >
                <img
                    src={ImgSertif}
                    alt="Certificate"
                    className="rounded-md w-full object-cover"
                />

                {/* Overlay muncul saat hover */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdFullscreen className="text-5xl text-white"/>
                    <p className="text-white font-semibold text-lg">View Certificates</p>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl w-[90%]">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full px-3 py-2 text-sm transition"
                        >
                            ✕
                        </button>
                        <img
                            src={ImgSertif}
                            alt="Certificate Full"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
