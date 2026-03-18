import { Users, Map, Building2, Landmark, Music2, Ship } from 'lucide-react'

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0 animate-heroZoom">
                    <img src="/images/hero.png" alt="Ozamiz City" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/70" />
                <div className="relative z-20 text-center opacity-0 animate-fadeUp px-6 md:px-8">
                    <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-black text-white leading-none tracking-tighter drop-shadow-2xl">
                        Travel
                    </h1>
                    <p className="text-white/80 text-sm md:text-base font-normal mt-3 tracking-[0.18em] uppercase">
                        Visit. Explore. Experience Ozamiz.
                    </p>
                </div>
            </section>

            {/* WHY SECTION */}
            <section className="bg-white py-16 md:py-24 px-6 md:px-8" id="about">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                    <div data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-extrabold leading-snug text-navy tracking-tight mb-4">
                            Why <span className="text-brand">Ozamiz City</span><br />Should Be Your Next Destination
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Whether you're discovering historic sites, enjoying coastal scenery, or experiencing local culture,
                            Ozamiz offers something for every traveler. A city where heritage meets modern life, and every
                            street tells a story worth exploring.
                        </p>
                        <div className="flex gap-6 md:gap-10 mt-8 flex-wrap">
                            {[
                                { Icon: Users, value: '163,000+', label: 'Population' },
                                { Icon: Map, value: '170 km²', label: 'City Area' },
                                { Icon: Building2, value: '54', label: 'Barangays' },
                            ].map(({ Icon, value, label }) => (
                                <div key={label} className="flex flex-col items-center gap-1">
                                    <div className="w-11 h-11 bg-brand rounded-full flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xl font-extrabold text-navy tracking-tight">{value}</span>
                                    <span className="text-[0.68rem] text-gray-400 uppercase tracking-widest font-medium">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="150">
                        {[
                            { Icon: Landmark, title: 'Rich History & Heritage', desc: 'Explore Fort Santiago (Cotta), a Spanish colonial fortress over 400 years old' },
                            { Icon: Music2, title: 'Vibrant Local Culture', desc: 'Experience the Sinulog Festival and colorful Mindanaoan traditions' },
                            { Icon: Ship, title: 'Gateway Port City', desc: 'Strategic maritime hub connecting Mindanao to the Visayas islands' },
                        ].map(({ Icon, title, desc }) => (
                            <div key={title} className="flex items-center gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-5 hover:translate-x-1.5 hover:shadow-lg transition-all duration-300">
                                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-navy mb-0.5">{title}</h4>
                                    <p className="text-xs text-gray-500">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CITY HIGHLIGHTS */}
            <section className="bg-slate-50 py-16 md:py-24 px-6 md:px-8" id="explore">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-4 md:gap-8" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight">City highlights</h2>
                        <p className="md:max-w-sm text-gray-500 text-sm leading-relaxed md:pt-1">
                            From tourist attractions to economic activities, discover where your next journey will take you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                        {[
                            { img: '/images/touristspot 1.png', badge: 'Explore', title: 'Tourist Spots', desc: 'Immaculate Conception Cathedral, Cotta', delay: 0 },
                            { img: '/images/culture 1.png', badge: 'Culture', title: 'Culture', desc: 'Sinulog King Ballroom Resources', delay: 100 },
                            { img: '/images/image 2.png', badge: 'Economic', title: 'Economic', desc: 'Ozamiz City Port, Marine Resources', delay: 200, span: 'sm:col-span-2 md:col-span-1' },
                        ].map(({ img, badge, title, desc, delay, span = '' }) => (
                            <div
                                key={title}
                                data-aos="fade-up"
                                data-aos-delay={delay}
                                className={`relative rounded-2xl overflow-hidden h-72 md:h-80 cursor-pointer shadow-md hover:-translate-y-2 hover:shadow-2xl group transition-all duration-300 ${span}`}
                            >
                                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                                    <span className="inline-block bg-gold text-navy text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">{badge}</span>
                                    <h3 className="text-white text-lg font-extrabold tracking-tight mb-1">{title}</h3>
                                    <p className="text-white/60 text-xs">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10" data-aos="fade-up">
                        <button className="bg-brand hover:bg-blue-800 text-white font-semibold text-sm tracking-wide px-10 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-200 cursor-pointer">
                            View More
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}