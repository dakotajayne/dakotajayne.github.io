import { Link } from "react-router-dom";

export default function InfoCard({ img, imgAlt, title, desc, btn, path, accent = "pink", reverse = false }) {

    const accentStyles = {
        pink: {
            label: "text-[var(--pink-deep)] bg-[var(--pink-light)] border border-[var(--pink-deep)]",
            button: "bg-[var(--pink-light)] border border-[var(--pink-deep)] hover:bg-[var(--pink-mid)] shadow-[0_2px_8px_var(--pink-light)] hover:shadow-[0_4px_16px_var(--pink-mid)] text-[var(--text-primary)]",
            card: "border-[var(--pink-mid)] bg-[var(--bg-pink)]",
            glow: "bg-[var(--pink-light)]",
            dot: "bg-[var(--pink-mid)]",
        },
        green: {
            label: "text-[var(--green-accent)] bg-[var(--green-soft)] border border-[var(--green-accent)]",
            button: "bg-[var(--green-soft)] border border-[var(--green-accent)] hover:bg-[var(--green-accent)] shadow-[0_2px_8px_var(--green-soft)] hover:shadow-[0_4px_16px_var(--green-accent)] text-[var(--text-primary)]",
            card: "border-[var(--green-soft)] bg-[var(--bg-green)]",
            glow: "bg-[var(--green-soft)]",
            dot: "bg-[var(--green-accent)]",
        }
    };

    const s = accentStyles[accent];

    return (
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center md:pb-5 gap-10 md:gap-14`}>

            {/* Image */}
            <div className="flex-shrink-0 flex justify-center relative">
                {/* Glow behind image */}
                <div className={`absolute inset-[-8px] rounded-[24px] ${s.glow} opacity-60 blur-[16px] pointer-events-none`} />

                {/* Dashed ring */}
                <div className={`absolute inset-[-14px] rounded-[24px] border-2 border-dashed ${accent === 'pink' ? 'border-[var(--pink-deep)] rotate-2' : 'border-[var(--green-accent)] rotate-[-2deg]'} opacity-40 pointer-events-none`} />

                <img
                    src={img}
                    alt={imgAlt}
                    className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] object-cover rounded-[18px] border-4 border-white bg-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 z-10"
                />
            </div>

            {/* Card */}
            <div className={`w-[380px] md:w-[600px] border ${s.card} rounded-[20px] px-6 py-6 md:px-12 md:py-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center md:text-left relative overflow-hidden`}>

                <span className={`text-[11px] tracking-[0.1em] uppercase font-medium px-3 py-1 rounded-full inline-block mb-3 ${s.label}`}>
                    {title}
                </span>

                <p className="font-snpro text-[14px] md:text-[13px] text-[var(--text-secondary)] leading-[1.6] md:leading-[1.75] mb-5">
                    {desc}
                </p>

                <div className="pt-5">
                    <Link to={path}>
                        <button className={`md:w-auto text-[12px] md:text-[13px] font-semibold px-6 py-2.5 md:py-2 rounded-full transition-all duration-200 cursor-pointer ${s.button}`}>
                            {btn} →
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
}