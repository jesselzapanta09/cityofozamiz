import { Link } from 'react-router-dom'
import { Landmark, Music2, Ship, ArrowRight } from 'lucide-react'

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0 animate-heroZoom">
                    <img src="./images/hero.png" alt="Ozamiz City" className="w-full h-full object-cover" />
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

            {/* WHY SECTION — bg-white */}
            <section className="bg-white" id="about">
                <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 md:py-[72px]">

                    {/* Left — text */}
                    <div data-aos="fade-right" className="flex flex-col justify-center md:pr-6">

                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-6 h-[1.5px] bg-brand shrink-0" />
                            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Why visit</span>
                        </div>

                        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-navy tracking-tight leading-[1.1] mb-4">
                            Your next destination<br />is <span className="text-brand">Ozamiz City</span>
                        </h2>

                        <p className="text-[13.5px] text-gray-500 leading-[1.72] mb-9 max-w-[380px]">
                            Where heritage meets the sea. A city shaped by centuries of resilience,
                            vibrant culture, and a coastline that opens to the rest of Mindanao.
                        </p>

                        {/* Feature rows */}
                        <div className="flex flex-col">

                            <div className="flex items-start gap-3.5 py-[15px] border-t border-slate-100">
                                <div className="w-9 h-9 rounded-[10px] bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                    <Landmark size={15} className="text-brand" />
                                </div>
                                <div>
                                    <div className="text-[13px] font-bold text-navy mb-1 tracking-tight">Rich History & Heritage</div>
                                    <div className="text-[12px] text-gray-400 leading-[1.55]">Fort Santiago (Cotta) — a Spanish colonial fortress standing for over 400 years.</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 py-[15px] border-t border-slate-100">
                                <div className="w-9 h-9 rounded-[10px] bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                    <Music2 size={15} className="text-brand" />
                                </div>
                                <div>
                                    <div className="text-[13px] font-bold text-navy mb-1 tracking-tight">Vibrant Local Culture</div>
                                    <div className="text-[12px] text-gray-400 leading-[1.55]">The Sinulog Festival and living Mindanaoan traditions celebrated year-round.</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 py-[15px] border-t border-b border-slate-100">
                                <div className="w-9 h-9 rounded-[10px] bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                    <Ship size={15} className="text-brand" />
                                </div>
                                <div>
                                    <div className="text-[13px] font-bold text-navy mb-1 tracking-tight">Gateway Port City</div>
                                    <div className="text-[12px] text-gray-400 leading-[1.55]">Strategic maritime hub linking Mindanao directly to the Visayas islands.</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right — image */}
                    <div data-aos="fade-left" className="relative w-full rounded-2xl overflow-hidden h-[420px]">
                        <img src="./images/hero.png" alt="Ozamiz City" className="absolute inset-0 w-full h-full object-cover" />
                    </div>

                </div>
            </section>

            {/* STATS BAND — bg-blue-50 */}
            <div data-aos="fade-up" className="bg-blue-50 border-y border-blue-100">
                <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4">

                    <div className="flex flex-col items-center gap-1 py-7 border-r border-blue-200">
                        <span className="font-extrabold text-navy leading-none text-[1.65rem] tracking-[-0.03em]">163K+</span>
                        <span className="font-bold tracking-[0.2em] uppercase text-blue-300 mt-1 text-[9.5px]">Population</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 py-7 border-r border-blue-200">
                        <span className="font-extrabold text-navy leading-none text-[1.65rem] tracking-[-0.03em]">54</span>
                        <span className="font-bold tracking-[0.2em] uppercase text-blue-300 mt-1 text-[9.5px]">Barangays</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 py-7 border-r border-blue-200">
                        <span className="font-extrabold text-navy leading-none text-[1.65rem] tracking-[-0.03em]">170 km²</span>
                        <span className="font-bold tracking-[0.2em] uppercase text-blue-300 mt-1 text-[9.5px]">City Area</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 py-7">
                        <span className="font-extrabold text-navy leading-none text-[1.65rem] tracking-[-0.03em]">400+</span>
                        <span className="font-bold tracking-[0.2em] uppercase text-blue-300 mt-1 text-[9.5px]">Yrs of History</span>
                    </div>

                </div>
            </div>

            {/* CITY HIGHLIGHTS — bg-slate-50 */}
            <section className="bg-slate-50 py-16 md:py-20" id="explore">
                <div className="max-w-6xl mx-auto px-6 md:px-8">

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-9 gap-4" data-aos="fade-up">
                        <div>
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-6 h-[1.5px] bg-brand" />
                                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Explore the city</span>
                            </div>
                            <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold text-navy tracking-tight leading-none">
                                City <span className="font-light">Highlights</span>
                            </h2>
                        </div>
                        <p className="text-[13px] text-slate-400 leading-[1.65] md:text-right md:max-w-[210px]">
                            Tourist spots, living culture, and a thriving port economy.
                        </p>
                    </div>

                    {/* Mobile grid */}
                    <div className="flex flex-col gap-3 md:hidden">

                        <div data-aos="fade-up" className="relative rounded-2xl overflow-hidden cursor-pointer group h-[260px]">
                            <img src="./images/touristspot 1.png" alt="Tourist Spots" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 p-[22px_24px] px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Explore
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">Tourist Spots</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">Immaculate Conception Cathedral, Fort Santiago (Cotta), and scenic Panguil Bay coastline.</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="relative rounded-2xl overflow-hidden cursor-pointer group h-[220px]">
                            <img src="./images/culture 1.png" alt="Culture & Heritage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Culture
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">Culture & Heritage</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">Sinulog Festival and Mindanaoan traditions.</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="relative rounded-2xl overflow-hidden cursor-pointer group h-[220px]">
                            <img src="./images/about 1.png" alt="City Life" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />City Life
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">City Life</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">Modern living with deep community roots.</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="relative rounded-2xl overflow-hidden cursor-pointer group h-[220px]">
                            <img src="./images/history.png" alt="400 Yrs of History" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />History
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">400 Yrs of History</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">From colonial fortress to modern city.</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="relative rounded-2xl overflow-hidden cursor-pointer group h-[220px]">
                            <img src="./images/image 2.png" alt="Port & Commerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Economic
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">Port & Commerce</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">Gateway maritime hub and marine resources.</p>
                            </div>
                        </div>

                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid gap-3 [grid-template-columns:1.55fr_1fr_1fr] [grid-template-rows:260px_200px]">

                        {/* Tourist Spots — spans both rows */}
                        <div
                            data-aos="fade-right"
                            className="relative rounded-2xl overflow-hidden cursor-pointer group [grid-row:1/3]"
                        >
                            <img src="./images/touristspot 1.png" alt="Tourist Spots" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-[linear-gradient(155deg,transparent_35%,rgba(10,22,40,0.5)_65%,rgba(10,22,40,0.96)_100%)]" />
                            <span className="absolute top-0 right-0 font-black leading-none pointer-events-none select-none text-[130px] text-[rgba(255,255,255,0.04)] tracking-[-0.04em] pr-[14px] pt-[8px]">01</span>
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-8 py-[30px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Explore
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.9rem]">Tourist Spots</h3>
                                <p className="leading-[1.55] text-[13px] text-white/45 max-w-[280px]">Immaculate Conception Cathedral, Fort Santiago (Cotta), and scenic Panguil Bay coastline.</p>
                            </div>
                        </div>

                        {/* Culture */}
                        <div data-aos="fade-up" data-aos-delay="80" className="relative rounded-2xl overflow-hidden cursor-pointer group">
                            <img src="./images/culture 1.png" alt="Culture & Heritage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <span className="absolute top-0 right-0 font-black leading-none pointer-events-none select-none text-[80px] text-[rgba(255,255,255,0.04)] tracking-[-0.04em] pr-[14px] pt-[8px]">02</span>
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Culture
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">Culture & Heritage</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">Sinulog Festival and Mindanaoan traditions.</p>
                            </div>
                        </div>

                        {/* City Life */}
                        <div data-aos="fade-up" data-aos-delay="80" className="relative rounded-2xl overflow-hidden cursor-pointer group">
                            <img src="./images/about 1.png" alt="City Life" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <span className="absolute top-0 right-0 font-black leading-none pointer-events-none select-none text-[80px] text-[rgba(255,255,255,0.04)] tracking-[-0.04em] pr-[14px] pt-[8px]">03</span>
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />City Life
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">City Life</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">Modern living with deep community roots.</p>
                            </div>
                        </div>

                        {/* History */}
                        <div data-aos="fade-up" data-aos-delay="160" className="relative rounded-2xl overflow-hidden cursor-pointer group">
                            <img src="./images/history.png" alt="400 Yrs of History" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <span className="absolute top-0 right-0 font-black leading-none pointer-events-none select-none text-[80px] text-[rgba(255,255,255,0.04)] tracking-[-0.04em] pr-[14px] pt-[8px]">04</span>
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />History
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">400 Yrs of History</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">From colonial fortress to modern city.</p>
                            </div>
                        </div>

                        {/* Economic */}
                        <div data-aos="fade-up" data-aos-delay="160" className="relative rounded-2xl overflow-hidden cursor-pointer group">
                            <img src="./images/image 2.png" alt="Port & Commerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.96)] via-[rgba(10,22,40,0.18)] to-transparent" />
                            <span className="absolute top-0 right-0 font-black leading-none pointer-events-none select-none text-[80px] text-[rgba(255,255,255,0.04)] tracking-[-0.04em] pr-[14px] pt-[8px]">05</span>
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-[22px]">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-[.16em] uppercase bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Economic
                                </div>
                                <h3 className="font-extrabold text-white tracking-[-0.025em] leading-tight mb-1.5 text-[1.25rem]">Port & Commerce</h3>
                                <p className="leading-[1.55] text-[12px] text-white/45">Gateway maritime hub and marine resources.</p>
                            </div>
                        </div>

                    </div>

                    {/* Explore More CTA */}
                    <div className="flex justify-center mt-10" data-aos="fade-up">
                        <Link
                            to="/explore"
                            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold tracking-wide px-8 py-3 rounded-lg hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-200 no-underline"
                        >
                            Explore More
                            <ArrowRight size={14} />
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}