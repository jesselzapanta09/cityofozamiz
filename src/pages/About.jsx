import { MapPin, Landmark, Shield, Building2, Globe, Users, ChevronRight } from 'lucide-react'

export default function About() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src="./images/about 1.png" alt="Ozamiz City Hall" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/75" />
                <div className="relative z-20 text-center opacity-0 animate-fadeUp px-6 md:px-8">
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter drop-shadow-2xl">About</h1>
                    <p className="text-white/75 text-sm md:text-base font-normal mt-3 tracking-[0.15em] uppercase">More Than a City — A Destination</p>
                </div>
            </section>

            {/* ORIGIN OF NAME */}
            <section className="overflow-hidden bg-[#EFECE5]" style={{ minHeight: 'calc(100vh - 70px)' }}>
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 flex items-center px-8 md:px-16 py-16 md:py-20" data-aos="fade-right">
                        <div className="max-w-lg">
                            <span className="inline-block text-brand text-xs font-bold uppercase tracking-[0.18em] mb-3">Our Story</span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight leading-snug mb-5">
                                Origin of the Name<br /><span className="text-brand">"Ozamiz"</span>
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                The city was named after <strong className="text-gray-700">Joaquin Velez</strong>, a respected freedom fighter and
                                resistance leader during World War II. He courageously fought against the Japanese occupation and was recognized
                                by the Philippine government as a resistance movement in honor of his bravery and service. In the 1940s, the
                                city of Misamis was renamed Ozamiz in tribute to his contributions.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                From a small coastal settlement to a thriving city, Ozamiz has grown into a vital center of commerce, education,
                                and culture in Northern Mindanao — carrying with it the spirit of resilience that defined its founding.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative" style={{ minHeight: '400px' }} data-aos="fade-left" data-aos-delay="150">
                        <img src="./images/ozamiz.png" alt="Joaquin Velez Ozamiz" className="w-full h-full object-cover grayscale absolute inset-0" style={{ minHeight: '400px' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                                <p className="text-white text-sm font-bold tracking-wide">Joaquin Velez Ozamiz</p>
                                <p className="text-white/60 text-xs mt-0.5">City's Namesake</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HISTORY */}
            <section className="bg-slate-50 py-16 md:py-20 px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="mb-10">
                        <span className="inline-block text-brand text-xs font-bold uppercase tracking-[0.18em] mb-3">Through the Years</span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight">History</h2>
                    </div>

                    <div data-aos="fade-up" className="rounded-2xl overflow-hidden shadow-lg mb-12 h-92">
                        <img src="./images/history.png" alt="Fort del Pilar - Historical Sketch" className="w-full h-full object-cover object-top" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            { Icon: MapPin, era: 'Pre-1900s – Early 1940s', title: 'Ozamiz City was originally called Misamis', desc: 'The settlement served as a key Spanish colonial outpost and was later recognized as a major municipality in the province of Misamis Occidental.', delay: 0 },
                            { Icon: Landmark, era: '16th Century', title: 'Fuerte de la Concepcion y del Triunfo', desc: 'Spanish settlement established in the 9th century. During the Spanish colonial period, the town served as an important military outpost to protect the region from pirates and invaders.', delay: 100 },
                            { Icon: Shield, era: 'World War II', title: 'Resistance & Renaming', desc: 'A key historical landmark from 9th century Ozamiz is the Cotta — a fort historically known as the "Fuerte de la Concepcion del Triunfo." The city was later renamed Ozamiz City in honor of the resistance leader, officially becoming Ozamiz City in 1948.', delay: 200 },
                            { Icon: Building2, era: 'Present Day', title: 'A Modern City with Deep Roots', desc: 'Today, Ozamiz City is a thriving component city and the major commercial and educational hub of Misamis Occidental, home to over 163,000 residents across 54 barangays.', delay: 300 },
                        ].map(({ Icon, era, title, desc, delay }) => (
                            <div key={era} data-aos="fade-up" data-aos-delay={delay} className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                        <Icon className="w-5 h-5 text-brand" />
                                    </div>
                                    <div>
                                        <span className="text-[0.68rem] font-bold text-gold uppercase tracking-widest">{era}</span>
                                        <h3 className="text-base font-extrabold text-navy mt-1 mb-2">{title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GEOGRAPHIC + POPULATION */}
            <section className="bg-navy py-16 md:py-20 px-6 md:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    <div data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center">
                                <Globe className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-lg md:text-xl font-extrabold text-white tracking-tight">Geographic Location</h2>
                        </div>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {['Northern Mindanao', 'Misamis Occidental Province', 'Along Panguil Bay', 'In Misamis Occidental', 'Coastal city'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                                    <ChevronRight className="w-4 h-4 text-gold shrink-0" />{item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="150">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-lg md:text-xl font-extrabold text-white tracking-tight">Population & Demographics</h2>
                        </div>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {['163,000+ residents', '54 barangays', 'Cebuano speaking', 'Filipino & English used', 'Diverse natives'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                                    <ChevronRight className="w-4 h-4 text-gold shrink-0" />{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="bg-white py-16 md:py-20 px-6 md:px-8" id="map">
                <div className="max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="mb-8">
                        <span className="inline-block text-brand text-xs font-bold uppercase tracking-[0.18em] mb-3">Find Us</span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-navy tracking-tight">MAP</h2>
                    </div>
                    <div data-aos="zoom-in" className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 md:h-[420px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63360.87455963!2d123.8!3d8.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff94b12e43d88f%3A0x500e1c6e4b0a3a3!2sOzamiz%20City%2C%20Misamis%20Occidental!5e0!3m2!1sen!2sph!4v1699000000000"
                            width="100%" height="100%" style={{ border: 0 }}
                            allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ozamiz City Map" className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}