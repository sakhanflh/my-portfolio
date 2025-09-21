export default function TechStackIcon({ TechStackIcon, Language }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
            <img src={TechStackIcon} alt={Language} className="w-12 h-12" />
            <span className="text-sm text-slate-300">{Language}</span>
        </div>
    );
}
