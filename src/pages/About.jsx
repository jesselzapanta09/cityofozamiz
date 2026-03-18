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
                        <p className="text-sm text-gray-500 text-justify leading-relaxed mb-4 max-w-md">
                            The city was named after <strong className="text-gray-700">Jose Ozamiz</strong>, a distinguished Filipino senator and
                            patriot who bravely resisted the Japanese occupation during World War II. He was captured and executed in 1942,
                            becoming a symbol of courage and sacrifice. In 1948, the former town of Misamis was officially renamed Ozamiz in
                            his honor, recognizing his heroism and contribution to the nation.
                        </p>
                        <p className="text-sm text-gray-500 text-justify leading-relaxed max-w-md">
                            From a small coastal settlement, Ozamiz has grown into a thriving city and a key center of commerce, education,
                            and culture in Northern Mindanao—carrying forward a legacy of resilience rooted in its rich history.
                        </p>
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden h-[420px]">
                        <img src="./images/oz-ozamiz.png" alt="Joaquin Velez Ozamiz" className="absolute inset-0 w-full h-full object-cover grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                                <p className="text-white text-sm font-bold tracking-wide">Jose Ozamiz</p>
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
                                    <h3 className="text-base font-extrabold text-navy mt-1 mb-2">Originally Known as Misamis</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Ozamiz was formerly known as Misamis, a coastal settlement that became an important Spanish-era
                                        outpost and later developed into a key municipality in Misamis Occidental.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                    <Landmark className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-widest">1756</span>
                                    <h3 className="text-base font-extrabold text-navy mt-1 mb-2">Fuerte de la Concepcion y del Triunfo</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        The Spanish built this historic fort, now known as the Cotta, to defend the area against Moro
                                        raiders. It remains one of the city's most iconic landmarks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                    <Shield className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-widest">World War II – 1948</span>
                                    <h3 className="text-base font-extrabold text-navy mt-1 mb-2">Resistance & Renaming</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        The city was renamed Ozamiz in 1948 in honor of Jose Ozamiz, a Filipino senator who resisted
                                        Japanese forces during World War II and was executed for his bravery.
                                    </p>
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
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Today, Ozamiz City is a thriving component city and a major commercial and educational hub in
                                        Misamis Occidental, home to over 160,000 residents across its barangays.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* GEOGRAPHIC + POPULATION — bg-blue-50 */}
            <section className="bg-blue-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

                    {/* GEOGRAPHIC */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shrink-0">
                                <Globe className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-lg md:text-xl font-extrabold text-navy tracking-tight">
                                Geographic Location
                            </h2>
                        </div>

                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Northern Mindanao Region
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Province of Misamis Occidental
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Located along Panguil Bay
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Coastal gateway city in Northwestern Mindanao
                            </li>
                        </ul>
                    </div>

                    {/* POPULATION */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center shrink-0">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-lg md:text-xl font-extrabold text-navy tracking-tight">
                                Population & Demographics
                            </h2>
                        </div>

                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Over 163,000 residents
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                54 barangays
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Primarily Cebuano-speaking
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Filipino and English widely used
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <ChevronRight className="w-4 h-4 text-brand shrink-0" />
                                Culturally diverse community with Subanen heritage
                            </li>
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