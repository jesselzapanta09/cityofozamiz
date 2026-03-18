import { Link } from 'react-router-dom'
import { Facebook, Github, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-navy pt-16 pb-8 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Top — logos + info + nav */}
                <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-10 pb-10 border-b border-white/10">

                    {/* Left — logos + info */}
                    <div className="flex flex-col items-center md:items-start gap-5">
                        <div className="flex gap-4 items-center">
                            <img src="./images/oz-dot.png" alt="Dept of Tourism" className="w-16 h-16 rounded-full object-cover border border-white/20" />
                            <img src="./images/oz-mis-occ.png" alt="Misamis Occidental" className="w-16 h-16 rounded-full object-cover border border-white/20" />
                            <img src="./images/oz-logo.png" alt="City of Ozamiz" className="w-16 h-16 rounded-full object-cover border border-white/20" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-white text-sm font-bold tracking-wide mb-1">City of Ozamiz Tourism Office</p>
                            <p className="text-white/45 text-xs leading-relaxed max-w-[220px]">
                                Promoting the culture, heritage, and natural beauty of Ozamiz City, Misamis Occidental.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <div className="flex items-center gap-2 text-white/45 text-xs">
                                <MapPin className="w-3.5 h-3.5 shrink-0 text-brand" />
                                Ozamiz City, Misamis Occidental, Philippines
                            </div>
                            <div className="flex items-center gap-2 text-white/45 text-xs">
                                <Phone className="w-3.5 h-3.5 shrink-0 text-brand" />
                                (088) 521-0000
                            </div>
                            <div className="flex items-center gap-2 text-white/45 text-xs">
                                <Mail className="w-3.5 h-3.5 shrink-0 text-brand" />
                                tourism@ozamiz.gov.ph
                            </div>
                        </div>
                    </div>

                    {/* Right — nav */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <h4 className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest mb-1">Navigation</h4>
                        {[
                            { label: 'Home', to: '/' },
                            { label: 'About', to: '/about' },
                            { label: 'Explore', to: '/explore' },
                            { label: 'News', to: '/news' },
                            { label: 'Services', to: '/services' },
                        ].map(({ label, to }) => (
                            <Link
                                key={to}
                                to={to}
                                className="text-white/60 text-sm font-medium hover:text-white transition-colors no-underline"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom — socials + copyright */}
                <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/OzamizCityOfficial" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200">
                            <Facebook className="w-3.5 h-3.5" />
                        </a>
                        <a href="mailto:ozamizcitourismoffice@gmail.com" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-brand hover:text-white hover:border-brand transition-all duration-200">
                            <Mail className="w-3.5 h-3.5" />
                        </a>
                        <a href="https://github.com/jesselzapanta09/cityofozamiz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-all duration-200">
                            <Github className="w-3.5 h-3.5" />
                        </a>
                    </div>
                    <p className="text-white/30 text-xs text-center">© {new Date().getFullYear()} All Rights Reserved. Jessel Zapanta</p>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-white/20 text-sm mt-4 leading-relaxed">
                    This website is for educational purposes only and is not the official website of the City of Ozamiz or any government agency.
                </p>

            </div>
        </footer>
    )
}