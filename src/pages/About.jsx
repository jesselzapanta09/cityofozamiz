import { MapPin, Landmark, Shield, Building2, Globe, Users, ChevronRight } from 'lucide-react'

export default function About() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src="./images/oz-about.png" alt="Ozamiz City Hall" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/75" />
                <div className="relative z-20 text-center px-6 md:px-8">
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter drop-shadow-2xl">About</h1>
                    <p className="text-white/75 text-sm md:text-base font-normal mt-3 tracking-[0.15em] uppercase">More Than a City — A Destination</p>
                </div>
            </section>

            {/* ORIGIN OF NAME */}
            <section className="bg-blue-50" id="story">
                <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 md:py-[72px]">
                    <div className="flex flex-col justify-center md:pr-6">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-6 h-px bg-brand shrink-0 scale-y-150" />
                            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Our Story</span>
                        </div>
                        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-navy tracking-tight leading-tight mb-4">
                            Origin of the Name<br /><span className="text-brand">"Ozamiz"</span>
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-md">
                            The city was named after <strong className="text-gray-700">Joaquin Velez</strong>, a respected freedom fighter and
                            resistance leader during World War II. He courageously fought against the Japanese occupation and was recognized
                            by the Philippine government as a resistance movement in honor of his bravery and service. In the 1940s, the
                            city of Misamis was renamed Ozamiz in tribute to his contributions.
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                            From a small coastal settlement to a thriving city, Ozamiz has grown into a vital center of commerce, education,
                            and culture in Northern Mindanao — carrying with it the spirit of resilience that defined its founding.
                        </p>
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden h-[420px]">
                        <img src="./images/oz-ozamiz.png" alt="Joaquin Velez Ozamiz" className="absolute inset-0 w-full h-full object-cover grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                                <p className="text-white text-sm font-bold tracking-wide">Joaquin Velez Ozamiz</p>
                                <p className="text-white/60 text-xs mt-0.5">City's Namesake</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HISTORY */}
            <section className="bg-slate-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-6 h-px bg-brand shrink-0 scale-y-150" />
                        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Through the Years</span>
                    </div>
                    <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold text-navy tracking-tight leading-none mb-10">
                        History
                    </h2>

                    <div className="rounded-2xl overflow-hidden shadow-lg mb-12 h-[380px]">
                        <img src="./images/oz-history.png" alt="Fort del Pilar - Historical Sketch" className="w-full h-full object-cover object-top" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                        <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-widest">Pre-1900s – Early 1940s</span>
                                    <h3 className="text-base font-extrabold text-navy mt-1 mb-2">Ozamiz City was originally called Misamis</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">The settlement served as a key Spanish colonial outpost and was later recognized as a major municipality in the province of Misamis Occidental.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                    <Landmark className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-widest">16th Century</span>
                                    <h3 className="text-base font-extrabold text-navy mt-1 mb-2">Fuerte de la Concepcion y del Triunfo</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Spanish settlement established in the 9th century. During the Spanish colonial period, the town served as an important military outpost to protect the region from pirates and invaders.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                    <Shield className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-widest">World War II</span>
                                    <h3 className="text-base font-extrabold text-navy mt-1 mb-2">Resistance & Renaming</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">A key historical landmark from 9th century Ozamiz is the Cotta — a fort historically known as the "Fuerte de la Concepcion del Triunfo." The city was later renamed Ozamiz City in honor of the resistance leader, officially becoming Ozamiz City in 1948.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                    <Building2 className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-widest">Present Day</span>
                                    <h3 className="text-base font-extrabold text-navy mt-1 mb-2">A Modern City with Deep Roots</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">Today, Ozamiz City is a thriving component city and the major commercial and educational hub of Misamis Occidental, home to over 163,000 residents across 54 barangays.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GEOGRAPHIC + POPULATION — bg-blue-50 */}
            <section className="bg-blue-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    <div>
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shrink-0">
                                <Globe className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-lg md:text-xl font-extrabold text-navy tracking-tight">Geographic Location</h2>
                        </div>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />Northern Mindanao</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />Misamis Occidental Province</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />Along Panguil Bay</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />In Misamis Occidental</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />Coastal city</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shrink-0">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-lg md:text-xl font-extrabold text-navy tracking-tight">Population & Demographics</h2>
                        </div>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />163,000+ residents</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />54 barangays</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />Cebuano speaking</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />Filipino & English used</li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm"><ChevronRight className="w-4 h-4 text-brand shrink-0" />Diverse natives</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* MAP — bg-slate-50 */}
            <section className="bg-slate-50 py-16 md:py-20" id="map">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-6 h-px bg-brand shrink-0 scale-y-150" />
                        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Find Us</span>
                    </div>
                    <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold text-navy tracking-tight leading-none mb-8">
                        Location
                    </h2>
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg h-[420px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63360.87455963!2d123.8!3d8.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff94b12e43d88f%3A0x500e1c6e4b0a3a3!2sOzamiz%20City%2C%20Misamis%20Occidental!5e0!3m2!1sen!2sph!4v1699000000000"
                            width="100%" height="100%"
                            allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ozamiz City Map"
                            className="w-full h-full border-0"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}