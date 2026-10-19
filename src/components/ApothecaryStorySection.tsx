import React, { useState } from 'react';
import { TIMELINE_MILESTONES } from '../data/parlorData';
import { BookOpen, ChevronDown, ChevronUp, History, Sparkles } from 'lucide-react';

export const ApothecaryStorySection: React.FC = () => {
  const [openLoreIndex, setOpenLoreIndex] = useState<number | null>(null);

  const parlorLore = [
    {
      question: "Why is it called an 'Egg Cream' if it contains neither eggs nor cream?",
      answer: "Legend in Kings County suggests two origins: In Yiddish theatre traditions, 'echt keem' meant 'pure sweetness', which was Anglicized into egg cream. Others claim Brooklyn fountain jerks whipped egg whites into the froth during the early 1900s before Fox's U-Bet cocoa syrup perfected the three-ingredient milk, syrup, and cold seltzer formula."
    },
    {
      question: "What is an 'Acid Phosphate' and why do soda parlors use it?",
      answer: "In the late 19th and early 20th century, before artificial citrus flavorings existed, apothecaries used food-grade dilute phosphoric acid salts to give carbonated fountain syrups a crisp, thirst-quenching sour sparkle without masking delicate botanical aromas."
    },
    {
      question: "Why were fountain attendants known as 'Soda Jerks'?",
      answer: "The title came from the distinctive physical motion required to operate the Bastian-Blessing draft arms. Jerking the chrome lever forward shot high-velocity carbonated water to aerate syrups; pushing it backward produced a gentle still trickle to top off the glass."
    },
    {
      question: "What happened to Longo's original pharmacy records and bottles?",
      answer: "They are still here! More than 1,000 cobalt blue and amber medicinal bottles, patent medicine ledgers, and solid mahogany prescription cabinetry remain fully preserved on display inside 513 Henry Street."
    }
  ];

  return (
    <section className="w-full bg-[#fff1ed] py-16 px-4 lg:px-12 border-b border-[#dec0bb]/60" id="apothecary-story">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Archival Photo Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="rounded-2xl overflow-hidden bg-[#feeae4] shadow-md border-4 border-white aspect-square relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Founders Peter Freeman and Gia Giasullo cataloging antique apothecary glass bottles in Longos Pharmacy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfU6wQ-dqRJO2tNeKCTLZ6DsB2-ho7CY1_8BRzBFe2Z63hArcZhgfbXo5QPfdN4SneL5xwEwm0Uf1-Bz2Qvdyi5xDUjhQK04qQ--L4Do_4q9KG4pUzljHzYDPcNm4qns3ySoopb8QtvVlyHZnVR22IAD7EqLrzlZHRQT9z3vpzHBUQujRn0qcTmEiK-oBmUdMHOItwV7u9ysDyiPrK16_TlRd6EJrOOrEEDOUusim8imFUICQp3fnBuA"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <span className="font-label-sm uppercase tracking-wider text-[#ffdcbf]">Carroll Gardens Archive</span>
              </div>
            </div>
            <div className="bg-white border border-[#dec0bb] p-3 rounded-xl shadow-xs text-center">
              <p className="font-label-sm uppercase text-[#8b716d]">
                Brother &amp; Sister Founders: Peter Freeman &amp; Gia Giasullo
              </p>
            </div>
          </div>

          {/* Historical Narrative & Interactive Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div>
              <span className="font-label-sm text-[#6b0e06] uppercase font-bold tracking-widest flex items-center gap-1.5">
                <History className="w-3.5 h-3.5" />
                A Brooklyn Heritage Rescued
              </span>
              <h2 className="font-headline-lg text-[#6b0e06] tracking-tight mt-1">
                From Longo’s Prescription Pharmacy to Community Sanctuary
              </h2>
            </div>

            <p className="font-body-md text-[#57423e] leading-relaxed">
              For nearly nine decades, pharmacist Longo tended to the ailments of Carroll Gardens at 513 Henry Street. When the pharmacy finally shuttered, its century-old mahogany drawers, medicinal formulary ledgers, and cobalt-blue tinctures lay slumbering in silence behind dust-veiled shop windows.
            </p>

            <p className="font-body-md text-[#57423e] leading-relaxed">
              In 2009, local residents Peter Freeman and his sister Gia Giasullo peered through the glass, fell under its spell, and vowed not to let another piece of authentic Brooklyn disappear. With an army of neighbors and historic preservationists, they revived the seltzer apparatus and opened the parlor doors in May 2010.
            </p>

            {/* Chronology Ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-2">
              {TIMELINE_MILESTONES.map((milestone, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white border border-[#dec0bb] rounded-xl flex flex-col shadow-xs hover:border-[#6b0e06] transition-colors"
                >
                  <span
                    className={`font-headline-sm text-lg font-bold ${
                      idx === 0
                        ? 'text-[#6b0e06]'
                        : idx === 1
                        ? 'text-[#376847]'
                        : idx === 2
                        ? 'text-[#502b00]'
                        : 'text-[#6b0e06]'
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <span className="font-label-sm uppercase font-bold text-[#231916] mt-1 line-clamp-1">
                    {milestone.title.split(' ')[0]}
                  </span>
                  <p className="font-body-sm text-[11px] text-[#57423e] leading-tight mt-1">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parlor Lore & Apothecary Curiosities Accordion */}
        <div className="bg-white border border-[#dec0bb] rounded-2xl p-6 lg:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-[#6b0e06]" />
            <h3 className="font-headline-md text-xl text-[#6b0e06] font-bold">
              The Soda Jerk's Archival Compendium &amp; Lore
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parlorLore.map((lore, idx) => {
              const isOpen = openLoreIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#dec0bb] rounded-xl bg-[#fff8f6] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenLoreIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 font-headline-sm text-sm text-[#231916] hover:text-[#6b0e06] cursor-pointer"
                  >
                    <span className="font-semibold">{lore.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 shrink-0 text-[#6b0e06]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 shrink-0 text-[#8b716d]" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 font-body-sm text-xs text-[#57423e] leading-relaxed border-t border-[#feeae4] bg-white">
                      {lore.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
