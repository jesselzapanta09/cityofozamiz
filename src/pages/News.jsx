const FB_PAGE = 'https://www.facebook.com/AsensoOzamizNewsChannel'

export default function News() {
    return (
        <>
            {/* HERO */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img src="./images/oz-news.png" alt="Ozamiz City Hall" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/75" />
                <div className="relative z-20 text-center px-6 md:px-8">
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter drop-shadow-2xl">News</h1>
                    <p className="text-white/75 text-sm md:text-base font-normal mt-3 tracking-[0.15em] uppercase">Discover the Spirit of Ozamiz</p>
                </div>
            </section>

            {/* LATEST NEWS — bg-white */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6 md:px-8">

                    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">Latest News</h2>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 mb-14">

                        {/* Featured */}
                        <a
                            href="https://www.facebook.com/100063690144354/posts/1539518421514481/?app=fbl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col gap-4 cursor-pointer group no-underline"
                        >
                            <div className="rounded-2xl overflow-hidden h-64 md:h-72">
                                <img src="./images/oz-news-1.png" alt="New Police Leadership" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div>
                                <span className="text-[9.5px] font-bold text-brand uppercase tracking-widest">Local</span>
                                <h3 className="text-lg md:text-xl font-extrabold text-navy tracking-tight leading-snug mt-1.5 mb-2 group-hover:text-brand transition-colors duration-200">
                                    New Police Leadership Takes Charge in Ozamiz, Reinforcing Commitment to Peace and Public Safety
                                </h3>
                                <p className="text-xs text-gray-400">17 March 2026 &nbsp;|&nbsp; Asenso News Channel</p>
                            </div>
                        </a>

                        {/* Two stacked */}
                        <div className="flex flex-col gap-6">

                            <a
                                href="https://www.facebook.com/100063690144354/posts/1537660725033584/?app=fbl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-4 cursor-pointer group no-underline"
                            >
                                <div className="flex flex-col flex-1 justify-center">
                                    <span className="text-[9.5px] font-bold text-brand uppercase tracking-widest mb-1.5">Local</span>
                                    <h4 className="text-sm font-extrabold text-navy tracking-tight leading-snug mb-2 group-hover:text-brand transition-colors duration-200">
                                        Lead Like the Babaylans, Filipinas! CSWD Hosts Zumba and Fun Activities for National Women's Month
                                    </h4>
                                    <p className="text-xs text-gray-400">15 March 2026 &nbsp;|&nbsp; Asenso News Channel</p>
                                </div>
                                <div className="rounded-xl overflow-hidden shrink-0 w-28 h-24 md:w-32 md:h-28">
                                    <img src="./images/oz-news-2.png" alt="National Women's Month" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </a>

                            <div className="border-t border-slate-100" />

                            <a
                                href="https://www.facebook.com/100063690144354/posts/1535938258539164/?app=fbl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-4 cursor-pointer group no-underline"
                            >
                                <div className="flex flex-col flex-1 justify-center">
                                    <span className="text-[9.5px] font-bold text-blue-400 uppercase tracking-widest mb-1.5">Education</span>
                                    <h4 className="text-sm font-extrabold text-navy tracking-tight leading-snug mb-2 group-hover:text-brand transition-colors duration-200">
                                        Access to Quality Education Strengthened: New School Buildings Turned Over to Benefit Students in the Second District
                                    </h4>
                                    <p className="text-xs text-gray-400">15 March 2026 &nbsp;|&nbsp; Asenso News Channel</p>
                                </div>
                                <div className="rounded-xl overflow-hidden shrink-0 w-28 h-24 md:w-32 md:h-28">
                                    <img src="./images/oz-news-3.png" alt="New School Buildings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}