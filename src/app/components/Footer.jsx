
export default function Footer() {
    return (
        <div className="bg-[var(--surface)] border-t border-[var(--grey-mid)] p-4">
            <footer className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 px-6 py-10">

                {/* Logo */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="font-bakbak font-extrabold text-[18px] text-[var(--text-primary)] tracking-wide text-center md:text-left">
                        SONNY SITE
                        <span className="hidden md:inline-block ml-2 w-1.5 h-1.5 rounded-full bg-[var(--pink-mid)] mb-0.5 align-middle" />
                    </p>
                    <p className="hidden md:block text-[11px] text-[var(--text-secondary)] font-snpro tracking-wide">
                        a personal collection catalog
                    </p>
                </div>

                {/* Center — dot decoration */}
                <div className="hidden md:flex items-center justify-center gap-2 opacity-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--pink-deep)]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-accent)]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--pink-deep)]" />
                </div>

                {/* Links */}
                <div className="flex items-center justify-center md:justify-end gap-4">
                    <a href="https://www.linkedin.com/in/dakotajayne" target="_blank" rel="noreferrer"
                        className="text-[13px] font-snpro tracking-[0.5px] text-[var(--text-secondary)] hover:text-[var(--pink-deep)] transition-colors duration-200">
                        LinkedIn
                    </a>
                    <span className="w-1 h-1 rounded-full bg-[var(--green-accent)]"/>
                    <a href="https://github.com/dakotajayne" target="_blank" rel="noreferrer"
                        className="text-[13px] font-snpro tracking-[0.5px] text-[var(--text-secondary)] hover:text-[var(--pink-deep)] transition-colors duration-200">
                        GitHub
                    </a>
                    <span className="w-1 h-1 rounded-full bg-[var(--green-accent)]"/>
                    <a href="mailto:d_jacobs215541@fanshaweonline.ca"
                        className="text-[13px] font-snpro tracking-[0.5px] text-[var(--text-secondary)] hover:text-[var(--pink-deep)] transition-colors duration-200">
                        Contact
                    </a>
                </div>

            </footer>

            <div className="border-t border-[var(--grey-mid)] py-3 text-center">
                <p className="text-[12px] text-[var(--grey-dark)] tracking-wide">
                    © 2025 Sonny Site. All rights reserved.
                </p>
            </div>
        </div>
    );
}