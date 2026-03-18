import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const isActive = (path) => location.pathname === path

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Explore', path: '/explore' },
        { label: 'News', path: '/news' },
        { label: 'Services', path: '/services' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${scrolled || menuOpen ? 'bg-navy/95 shadow-xl backdrop-blur-md' : 'bg-white/10 backdrop-blur-md'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-[70px]">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 no-underline">
                    <img src="./images/oz logo.png" alt="Ozamiz City Seal" className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-white font-bold text-[0.95rem] tracking-wide">Ozamiz City</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map(({ label, path }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`text-sm font-medium tracking-wide no-underline relative
                after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px]
                after:bg-gold after:rounded after:transition-transform
                ${isActive(path)
                                    ? 'text-white after:scale-x-100'
                                    : 'text-white/80 hover:text-white after:scale-x-0 hover:after:scale-x-100'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X className="w-5 h-5 text-white" />
                    ) : (
                        <>
                            <span className="block w-6 h-[2px] bg-white rounded-full" />
                            <span className="block w-6 h-[2px] bg-white rounded-full" />
                            <span className="block w-6 h-[2px] bg-white rounded-full" />
                        </>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-navy/97 backdrop-blur-md border-t border-white/10">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
                        {navLinks.map(({ label, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`text-sm font-medium tracking-wide py-3 px-4 rounded-lg transition-all no-underline
                  ${isActive(path)
                                        ? 'text-white font-semibold bg-white/10'
                                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}