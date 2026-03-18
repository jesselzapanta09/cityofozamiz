import {
    HeartPulse, GraduationCap, ShieldCheck, Bus,
    Zap, Building2, Hotel, Landmark, Wheat
} from 'lucide-react'

export default function Services() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src="./images/oz-services.png" alt="Services" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/75" />
                <div className="relative z-20 text-center px-6 md:px-8">
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter drop-shadow-2xl">Services</h1>
                    <p className="text-white/75 text-sm md:text-base font-normal mt-3 tracking-[0.15em] uppercase">Essential Services for Every Resident</p>
                </div>
            </section>

            {/* INTRO — bg-white */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-6 h-px bg-brand shrink-0 scale-y-150" />
                        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand">What we offer</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
                        <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold text-navy tracking-tight leading-none">
                            Essential Services <span className="font-light">in Ozamiz</span>
                        </h2>
                    </div>

                    {/* Featured two — Healthcare & Education full-width split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                        <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-72">
                            <img src="./images/oz-hos.png" alt="Healthcare" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-7 py-6">
                                <div className="w-10 h-10 bg-brand/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                                    <HeartPulse className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight mb-2">Healthcare</h3>
                                <p className="text-xs text-white/60 leading-relaxed max-w-xs">
                                    Mayor Hilarion A. Ramiro Sr. Medical Center provides specialized and emergency care, supported by private clinics and pharmacies citywide.
                                </p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-72">
                            <img src="./images/oz-edu.png" alt="Education" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-7 py-6">
                                <div className="w-10 h-10 bg-brand/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                                    <GraduationCap className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-extrabold text-white tracking-tight leading-tight mb-2">Education</h3>
                                <p className="text-xs text-white/60 leading-relaxed max-w-xs">
                                    Misamis University, La Salle University, and Medina College offer quality education from primary to tertiary levels.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* 3-col row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">

                        <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-56">
                            <img src="./images/oz-safety.png" alt="Public Safety" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-5">
                                <div className="w-9 h-9 bg-brand/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2.5">
                                    <ShieldCheck className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight mb-1.5">Public Safety</h3>
                                <p className="text-xs text-white/55 leading-relaxed">PNP, Bureau of Fire Protection, and barangay patrol units keep the city secure.</p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-56">
                            <img src="./images/oz-trans.png" alt="Transportation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-5">
                                <div className="w-9 h-9 bg-brand/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2.5">
                                    <Bus className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight mb-1.5">Transportation</h3>
                                <p className="text-xs text-white/55 leading-relaxed">Modern port, bus terminal, Labo Airport, and local tricycles connect the city and islands.</p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-56">
                            <img src="./images/oz-util.png" alt="Utilities" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-5">
                                <div className="w-9 h-9 bg-brand/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2.5">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight mb-1.5">Utilities</h3>
                                <p className="text-xs text-white/55 leading-relaxed">MOELCI electricity, Misamis Occidental Water District, and PLDT, Globe & Smart networks.</p>
                            </div>
                        </div>

                    </div>

                    {/* 4-col bottom row — text cards on light bg */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                                <Building2 className="w-5 h-5 text-brand" />
                            </div>
                            <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Commerce</span>
                            <h4 className="text-base font-extrabold text-navy tracking-tight mt-1 mb-2">Business & Commerce</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Gaisano Capital, Robinsons, and local markets support a growing economy in agriculture, fisheries, and trade.</p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                                <Hotel className="w-5 h-5 text-brand" />
                            </div>
                            <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Hospitality</span>
                            <h4 className="text-base font-extrabold text-navy tracking-tight mt-1 mb-2">Tourism & Hospitality</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Royal Garden Hotel, Asia Novo Hotel, and local resorts welcome visitors to heritage sites and festivals.</p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                                <Landmark className="w-5 h-5 text-brand" />
                            </div>
                            <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Finance</span>
                            <h4 className="text-base font-extrabold text-navy tracking-tight mt-1 mb-2">Banking & Finance</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">BDO, Metrobank, Landbank, and local cooperatives provide accessible banking and investment support.</p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                                <Wheat className="w-5 h-5 text-brand" />
                            </div>
                            <span className="text-[9.5px] font-bold text-blue-300 uppercase tracking-widest">Agriculture</span>
                            <h4 className="text-base font-extrabold text-navy tracking-tight mt-1 mb-2">Agriculture & Fisheries</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Rice, coconut, and aquaculture industries thrive with government programs supporting farmers and fisherfolk.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}