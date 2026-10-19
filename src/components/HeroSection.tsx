import React from 'react';
import { History, Utensils, IceCream, ArrowRight, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';

interface HeroSectionProps {
  onReserveClick: () => void;
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReserveClick, onExploreMenu }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Archival Micro-Notices & Register Ticker */}
      <section className="w-full bg-[#feeae4] border-b border-[#dec0bb]/50 py-2 px-4 lg:px-12 text-[#57423e] text-xs font-label-sm tracking-wider uppercase flex flex-wrap items-center justify-between gap-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#6b0e06] animate-ping"></span>
          <span className="font-bold text-[#6b0e06]">Archival Log Vol. 104</span>
          <span className="text-[#8b716d]">/</span>
          <span>Draft Pressure: 42 PSI Cold Seltzer</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Fresh Batch: Salted Caramel Drizzle</span>
          <span className="text-[#8b716d] hidden sm:inline">•</span>
          <span className="text-[#376847] font-bold">Counter Stools Currently Available</span>
        </div>
      </section>

      {/* Editorial Hero Folio */}
      <section className="relative w-full overflow-hidden bg-[#fff8f6] pt-8 pb-14 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 z-10">
            {/* 90s Editorial Kicker & Heritage Crest */}
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2.5 self-start text-[#6b0e06] font-label-sm uppercase tracking-[0.2em] text-[11px] font-bold">
                <span className="w-6 h-[1px] bg-[#6b0e06]"></span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#c98a4b]">✦</span>
                  <span>Est. 1920</span>
                  <span className="text-[#8b716d]">•</span>
                  <span>Restored 2010</span>
                  <span className="text-[#8b716d]">•</span>
                  <span>Carroll Gardens, NYC</span>
                  <span className="text-[#c98a4b]">✦</span>
                </span>
                <span className="w-6 h-[1px] bg-[#6b0e06]"></span>
              </div>
            </div>

            {/* 90s Editorial Statement Heading */}
            <div className="relative">
              <h1 className="font-display-lg text-[#231916] tracking-tight leading-[1.08] select-none">
                <span className="block font-normal italic font-serif text-[#8b261a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] tracking-[-0.01em]">
                  Authentic Seltzer,
                </span>
                <span className="block font-bold text-[#6b0e06] tracking-tight text-[1.02em]">
                  Preserved Memory,
                </span>
                <span className="block font-normal italic font-serif text-[#392e2a] flex flex-wrap items-baseline gap-x-3 tracking-[-0.01em]">
                  <span className="not-italic text-[#c98a4b] font-display-lg font-light text-4xl sm:text-5xl lg:text-6xl select-none">
                    &amp;
                  </span>
                  <span>Handcrafted Sundaes.</span>
                </span>
              </h1>

              {/* 90s Editorial Gold Hairline Rule with Diamond Motifs */}
              <div className="flex items-center gap-3 pt-3 max-w-md opacity-85">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-[#c98a4b] to-transparent"></span>
                <span className="text-[#c98a4b] text-[10px] tracking-widest font-mono">❖ 1920 FOLIO ❖</span>
                <span className="h-[1px] flex-1 bg-gradient-to-l from-[#c98a4b] to-transparent"></span>
              </div>
            </div>

            <p className="font-body-lg text-[#57423e] max-w-2xl leading-relaxed text-base sm:text-lg">
              <span className="float-left text-4xl sm:text-5xl font-display-lg text-[#6b0e06] font-bold leading-none pr-2.5 pt-1">
                H
              </span>
              oused in the lovingly salvaged Longo's Prescription Pharmacy (1920) at the historic corner of Henry &amp; Sackett Streets. Step across original penny-tile mosaics, take a counter swivel-stool, and savor hand-pulled egg creams, small-batch ice creams, and time-honored neighborhood hospitality.
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onReserveClick}
                className="bg-[#6b0e06] text-white font-label-lg uppercase px-5 py-3 rounded-lg hover:bg-[#8b261a] transition-all shadow-[2px_2px_0px_rgba(35,25,22,0.18)] flex items-center gap-2 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>Reserve a Parlor Booth</span>
              </button>

              <button
                onClick={onExploreMenu}
                className="bg-[#feeae4] text-[#6b0e06] border border-[#dec0bb] font-label-lg uppercase px-5 py-3 rounded-lg hover:bg-[#f8e4de] transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <IceCream className="w-4 h-4" />
                <span>Explore Sundae Menu</span>
              </button>

              <a
                href="#egg-cream-spotlight"
                onClick={() => soundEngine.playSeltzerFizz(400)}
                className="text-[#502b00] font-label-lg uppercase px-3 py-2 hover:text-[#6b0e06] transition-colors flex items-center gap-1 group"
              >
                <span>Fox's U-Bet Treats</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Atmospheric Vintage Stat Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg">
              <div className="p-3 bg-white border border-[#dec0bb]/60 rounded-xl shadow-sm flex flex-col justify-between">
                <span className="font-label-sm text-[#8b716d] uppercase tracking-wider">Mosaic Floor</span>
                <span className="font-headline-sm text-2xl text-[#6b0e06] font-bold">1920</span>
                <span className="font-body-sm text-xs text-[#57423e]">Intact &amp; Honored</span>
              </div>

              <div className="p-3 bg-white border border-[#dec0bb]/60 rounded-xl shadow-sm flex flex-col justify-between">
                <span className="font-label-sm text-[#8b716d] uppercase tracking-wider">Fountain Head</span>
                <span className="font-headline-sm text-2xl text-[#376847] font-bold">Cold 34°</span>
                <span className="font-body-sm text-xs text-[#57423e]">Triple-Carbonated</span>
              </div>

              <div className="p-3 bg-white border border-[#dec0bb]/60 rounded-xl shadow-sm flex flex-col justify-between">
                <span className="font-label-sm text-[#8b716d] uppercase tracking-wider">Purity Ledger</span>
                <span className="font-headline-sm text-2xl text-[#502b00] font-bold">100%</span>
                <span className="font-body-sm text-xs text-[#57423e]">Real Syrups &amp; Cream</span>
              </div>
            </div>
          </div>

          {/* Right Archival Media Mosaic */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#f8e4de] aspect-[4/5]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                alt="Historic 1920s Longo Pharmacy restored into Brooklyn Farmacy soda fountain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwa6ZBkD7Hu5vENKJuVAYZOkZWMDSsDD9S0JM2ORspMUXp12KduPPS8QMs8_BSaVEq_PpFv8ODiCEYNC9MM_zJ3kfZEQsNtVntdDKk2amcjCKa6zXTRulQ5ZHcV5i6hhzGFi526zJ2RWgkeNrE5B8TrcHLiRGNtJhc1CVvocW5N5zncXo80U_JjwIcmV0Du3uo4ziFWBdBXbPCPDmBlbwo2KD9xE_wyye-s2uvXJ4O2YMiEC5Lb-7Nmg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6b0e06]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="font-label-sm uppercase tracking-widest text-[#ffdad4]">
                  Historical Archive • Sackett &amp; Henry
                </div>
                <p className="font-headline-sm text-xl md:text-2xl mt-1 leading-snug">
                  The Counter That Saved Carroll Gardens Soda Heritage
                </p>
              </div>
            </div>

            {/* Overlapping Archival Pill Ticket */}
            <div className="-mt-12 ml-4 sm:ml-8 relative z-20 bg-white border border-[#dec0bb] p-4 rounded-xl shadow-2xl max-w-xs rx-paper-texture">
              <div className="flex items-center justify-between pb-2 mb-2 bg-[#fff1ed] px-2 py-1 rounded border border-[#dec0bb]/50">
                <span className="font-label-sm text-[#6b0e06] font-bold uppercase tracking-wider">Rx Form #513</span>
                <span className="font-label-sm text-[#376847] font-bold">DISPENSED DAILY</span>
              </div>
              <p className="font-body-sm text-xs italic text-[#231916] leading-relaxed">
                "Prescribed for melancholia, thirst, and summer longing. Consume cold at the counter."
              </p>
              <div className="mt-2 text-right font-label-sm text-[10px] text-[#8b716d]">
                — Longo's Apothecary Ledger
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
