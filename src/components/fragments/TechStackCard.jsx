export default function TechStackIcon({ icon, language }) {
    return (
        <div className="group hover:scale-105 flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
            {/* Container gambar dengan efek glow */}
            <div className="relative flex items-center justify-center">
                {/* Glow lingkaran */}
                <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/70 to-cyan-600/70 blur-sm opacity-0 group-hover:opacity-70 transition-all duration-300"></div>

                {/* Gambar */}
                <img src={icon} alt={language} className="w-20 h-20 relative z-10" />
            </div>

            <span className="font-semibold text-slate-300">{language}</span>
        </div>
    );
}
