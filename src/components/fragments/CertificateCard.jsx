export function CertificateCard({ ImgSertif }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:scale-[1.02] transition-all duration-300">
            <img
                src={ImgSertif}
                alt="Certificate"
                className="rounded-md w-full object-cover"
            />
        </div>
    );
}
