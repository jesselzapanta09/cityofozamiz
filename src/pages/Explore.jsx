export default function Explore() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src="./images/oz-wellness.png" alt="Explore Ozamiz City" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/75" />
                <div className="relative z-20 text-center px-6 md:px-8">
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter drop-shadow-2xl">Explore</h1>
                    <p className="text-white/75 text-sm md:text-base font-normal mt-3 tracking-[0.15em] uppercase">A City of Culture, History and Natural Beauty</p>
                </div>
            </section>

            {/* TOURIST ATTRACTIONS — bg-white */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-6 h-px bg-brand shrink-0 scale-y-150" />
                        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Must See</span>
                    </div>
                    <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold text-navy tracking-tight leading-none mb-10">
                        Tourist Attractions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-shrine.png" alt="Cotta Fort & Shrine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Historical</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Cotta Fort & Shrine</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">A historical fortress built in 1755, offering scenic views and a deep connection to Ozamiz's past.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-bukagan.png" alt="Bukagan Hill" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Scenic View</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Bukagan Hill</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Home to the legendary four giant bells, this hill offers a breathtaking panoramic view of the city.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-botanical.png" alt="Naomi's Botanical Garden" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Nature</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Naomi's Botanical Garden</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">A lush green paradise featuring exotic plants, colorful flowers, and a relaxing ambiance.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-lasalle.png" alt="The Rodriguez Ancestral House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Heritage</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">The Rodriguez Ancestral House</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Local accounts suggest that during his exile in Dapitan, national hero Dr. José Rizal spent a night in this residence.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-gala.png" alt="Tespi Farm - Gala" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Nature</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Tespi Farm — Gala</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Connect with nature in Gala — a peaceful farm experience away from the city bustle.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-fort.png" alt="Cotta Fort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">16th Century</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Cotta Fort</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Formally Fuerte de la Concepcion y del Triunfo, built in 1756 by Father Jose Ducos to protect Ozamiz City from Moro pirates.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-cathedral.png" alt="Metropolitan Cathedral of the Immaculate Conception" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Religious Center</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Metropolitan Cathedral of the Immaculate Conception</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Originally a parish church, elevated to a cathedral in 1951 and to an archdiocese in 1983.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-wellness.png" alt="Wellness Park" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Recreation</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Wellness Park</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Promotes physical and mental well-being through accessible green spaces for walking, running, sports, and nature engagement.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-2xl overflow-hidden h-[220px] group ">
                                <img src="./images/oz-boulevard.png" alt="Coastal Road - Boulevard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Infrastructure</span>
                                <h3 className="text-base font-extrabold text-navy mt-1 mb-2 tracking-tight">Coastal Road — Boulevard</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Expedites goods transportation from Ozamiz Port, eliminating the need to traverse city centers and reducing traffic congestion.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CULTURE AND FESTIVALS */}
            <section className="bg-blue-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-6 h-px bg-brand shrink-0 scale-y-150" />
                        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Living Traditions</span>
                    </div>
                    <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold text-navy tracking-tight leading-none mb-10">
                        Culture and Festivals
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
                        <div className="flex flex-col justify-center md:pr-6">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-4 text-[9.5px] font-bold tracking-widest uppercase bg-gold/10 border border-gold/30 text-gold w-fit">
                                Annual Festival
                            </div>
                            <h3 className="text-[clamp(1.4rem,2.5vw,1.9rem)] font-extrabold text-navy tracking-tight leading-snug mb-4">
                                Subayan Keg Subanen Festival
                            </h3>
                            <p className="text-sm text-gray-500 text-justify leading-relaxed max-w-md">
                                The Subayan Keg Subanen Festival is an annual celebration in Ozamiz City that honors the rich heritage, traditions, and identity of the Subanen people, the area’s original inhabitants. Often held alongside the city’s Charter Day festivities, it showcases vibrant street dancing, traditional music using gongs and drums, and colorful costumes adorned with indigenous patterns and beadwork. Through these performances, participants reenact rituals, daily life, and cultural stories, making the festival not just an entertaining event but also a meaningful way to preserve and promote indigenous culture for future generations.
                            </p>
                        </div>

                        <div className="relative w-full rounded-2xl overflow-hidden h-[360px]">
                            <img src="./images/oz-subanen-keg.png" alt="Subayan Keg Subanen Festival" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCAL CUISINE*/}
            <section className="bg-slate-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="mb-10">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-6 h-px bg-brand shrink-0 scale-y-150" />
                            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">Taste of Ozamiz</span>
                        </div>
                        <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold text-navy tracking-tight leading-none">
                            Local <span className="font-light">Cuisine</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div className="relative rounded-2xl overflow-hidden  group h-64">
                            <img src="./images/oz-bibingka.png" alt="Roasted Rice Cake" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-7 py-6">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-widest uppercase bg-gold/10 border border-gold/30 text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Agriculture
                                </div>
                                <h4 className="font-extrabold text-white tracking-tight leading-tight mb-1 text-xl">Roasted Rice Cake(Bibingka)</h4>
                                <p className="text-xs text-white/50 leading-relaxed">A traditional delicacy made from glutinous rice, reflecting the region’s rich agricultural resources and love for simple, comforting flavors.</p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden  group h-64">
                            <img src="./images/oz-kinilaw.png" alt="Fish Ceviche" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-7 py-6">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-widest uppercase bg-gold/10 border border-gold/30 text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Fishing
                                </div>
                                <h4 className="font-extrabold text-white tracking-tight leading-tight mb-1 text-xl">Fish Ceviche (Kinilaw)</h4>
                                <p className="text-xs text-white/50 leading-relaxed">Fresh fish marinated with vinegar and spices, a beloved coastal dish from Panguil Bay.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div className="relative rounded-2xl overflow-hidden  group h-64">
                            <img src="./images/oz-bal.png" alt="Roasted Rice Cake" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-7 py-6">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-widest uppercase bg-gold/10 border border-gold/30 text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Local
                                </div>
                                <h4 className="font-extrabold text-white tracking-tight leading-tight mb-1 text-xl">Balbacua</h4>
                                <p className="text-xs text-white/50 leading-relaxed">A slow-cooked beef stew made from collagen-rich parts like skin and feet, resulting in a thick, savory broth.</p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden  group h-64">
                            <img src="./images/oz-suman.png" alt="Fish Ceviche" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-7 py-6">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-2 text-[9.5px] font-bold tracking-widest uppercase bg-gold/10 border border-gold/30 text-gold">
                                    <span className="w-1 h-1 rounded-full inline-block bg-gold" />Local
                                </div>
                                <h4 className="font-extrabold text-white tracking-tight leading-tight mb-1 text-xl">Choco Suman</h4>
                                <p className="text-xs text-white/50 leading-relaxed">A signature pasalubong of Ozamiz City — sweet chocolate-coated rice cake loved by visitors..</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}