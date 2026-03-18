import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-navy pt-14 pb-6 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 pb-10 border-b border-white/10">
                    <div className="min-w-[150px]">
                        <div className="flex gap-3 items-center mb-3">
                            <img src="/images/image 4.png" alt="Dept of Tourism" className="w-11 h-11 rounded-full object-cover border border-white/20" />
                            <img src="/images/image 3.png" alt="Misamis Occidental" className="w-11 h-11 rounded-full object-cover border border-white/20" />
                            <img src="/images/oz logo.png" alt="City of Ozamiz" className="w-11 h-11 rounded-full object-cover border border-white/20" />
                        </div>
                        <p className="text-white/50 text-xs leading-relaxed">City of Ozamiz<br />Tourism Office</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 flex-1 w-full">
                        <div>
                            <h4 className="text-white/40 text-[0.65rem] font-bold uppercase tracking-[0.14em] mb-3">About Us</h4>
                            <ul className="flex flex-col gap-2 list-none p-0 m-0">
                                {['About Us', 'Contact Us', 'Affiliates', 'Resources'].map(item => (
                                    <li key={item}><a href="#" className="text-white/60 text-xs hover:text-white transition-colors no-underline">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white/40 text-[0.65rem] font-bold uppercase tracking-[0.14em] mb-3">Explore</h4>
                            <ul className="flex flex-col gap-2 list-none p-0 m-0">
                                {['Tourist Spots', 'Culture', 'Economic', 'Events'].map(item => (
                                    <li key={item}><a href="#" className="text-white/60 text-xs hover:text-white transition-colors no-underline">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-white/40 text-[0.65rem] font-bold uppercase tracking-[0.14em] mb-3">Connect</h4>
                            <ul className="flex flex-col gap-2 list-none p-0 m-0">
                                {['Facebook', 'Instagram', 'Twitter', 'Email'].map(item => (
                                    <li key={item}><a href="#" className="text-white/60 text-xs hover:text-white transition-colors no-underline">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex gap-3">
                        {[Facebook, Twitter, Instagram, Mail].map((Icon, i) => (
                            <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200">
                                <Icon className="w-3.5 h-3.5" />
                            </a>
                        ))}
                    </div>
                    <p className="text-white/30 text-xs">© All Rights Reserved. Ozamiz City Tourism</p>
                </div>
            </div>
        </footer>
    )
}