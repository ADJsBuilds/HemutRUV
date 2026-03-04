"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 bg-background overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface to-background opacity-80"></div>

            {/* Background elements to match brand style */}
            <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/home-bg-1.png')" }}></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out">
                <h1 className="text-48 md:text-72 font-tobias font-700 tracking-tight text-white leading-60 md:leading-79">
                    Invest in the Driver Network{" "}
                    <span className="block text-pastel-orange mt-2">for Direct Freight</span>
                </h1>

                <p className="text-19 md:text-21 text-white-smoke-1 max-w-2xl mx-auto leading-28 font-oldschool-grotesk font-300">
                    Eliminate freight middlemen. Return margin back to drivers and shippers. <br /><span className="text-16 opacity-80">Stop brokers from capturing 15-30% just for passing information.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="w-full sm:w-auto font-600 bg-pastel-orange text-black hover:bg-pastel-orange-1 font-oldschool-grotesk" onClick={() => document.getElementById('invest')?.scrollIntoView({ behavior: 'smooth' })}>
                        Express Interest
                    </Button>
                    <Link href="/schedule" className="w-full sm:w-auto">
                        <Button size="lg" variant="secondary" className="w-full font-600 font-oldschool-grotesk text-white border-border hover:bg-white/5 bg-transparent">
                            Schedule a Call
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="mt-16 relative z-10 w-full max-w-5xl mx-auto aspect-video bg-surface rounded-xl overflow-hidden shadow-2xl border border-border flex items-center justify-center group">
                <video src="/Hero_Home_Page.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"></video>
            </div>
        </section>
    );
}
