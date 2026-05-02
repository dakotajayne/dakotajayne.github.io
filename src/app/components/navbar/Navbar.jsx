import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavLinks = [
    {label: "Homepage", path: "/"},
    {label: "SMISKI", path: "smiski"},
    {label: "Sonny Angels", path: "sonny"},
    {label: "Gallery", path: "gallery"}
];

function NavItem({ label, path, onClick }) {
    return (
        <NavLink
            to={path}
            onClick={onClick}
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`}
        >
            {label}
        </NavLink>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-[var(--surface)] border-b-2 border-[var(--grey-mid)]">
            <nav className="max-w-[1400px] mx-auto flex items-center justify-between py-6">
                <h1 className="pl-5 md:pl-0 font-bakbak font-extrabold text-[24px] text-[var(--text-primary)] tracking-wide">
                    SONNY SITE
                    <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-[var(--pink-mid)] mb-1 align-middle" />
                </h1>

                {/* desktop links */}
                <div className="hidden md:flex items-center gap-7">
                    {NavLinks.map((item) => (<NavItem key={item.path} {...item} />))}
                </div>

                {/* mobile hamburger */}
                <button
                    className="md:hidden flex items-center justify-center w-12 h-12 text-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {open && (
                <div className="md:hidden border-t border-[var(--grey-mid)] py-3 px-6 flex flex-col">
                    {NavLinks.map(item => (
                        <NavItem key={item.path} {...item} onClick={() => setOpen(false)} />
                    ))}
                </div>
            )}
        </div>
    );
}
