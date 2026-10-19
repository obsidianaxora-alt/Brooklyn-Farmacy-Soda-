import React from 'react';
import { MapPin, Navigation, Train, BookOpen, ShoppingBag, Clock } from 'lucide-react';

export const VisitSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fff1ed] py-16 px-4 lg:px-12 border-b border-[#dec0bb]/60" id="plan-visit">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="font-label-sm text-[#502b00] uppercase font-bold tracking-widest">
              Corner of Sackett &amp; Henry St
            </span>
            <h2 className="font-headline-lg text-[#6b0e06] tracking-tight mt-1">
              Plan Your Visit to Carroll Gardens
            </h2>
          </div>
          <div className="font-label-sm text-[#57423e] uppercase">
            Walk-ins Always Welcomed for Counter Seating
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Interactive Map Component */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dec0bb] flex flex-col">
            <div
              className="w-full h-80 bg-cover bg-center relative group"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSVSosx24XOQMR_X9FJdrgua1JKnSAT2fsHxvsmCxF_amaFy18PmtYUTxjnkf_H_CES8YN3j0D-XoR9I4riElUYHxRbX4IvD3S0xkHma-QKlL6aKfX7MDH1GUguarUJU1LUvlIxcA3-_BXTkaxIi9LVGPATWZh-8a-0OEiaCu31ffpSqsHvY3OBqu2tJePHYpn2OgG68lfrcYeqy8XmpFU9eT5y1Ha2ZfoKCroa6yQjrb6Xs-fyEfITg')`,
              }}
            >
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#dec0bb] shadow-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6b0e06] animate-ping"></span>
                <span className="font-label-sm uppercase font-bold text-[#6b0e06]">
                  513 Henry St Landmark
                </span>
              </div>
            </div>

            <div className="p-5 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="font-headline-sm text-xl text-[#6b0e06] font-bold block">
                  513 Henry Street
                </span>
                <p className="font-body-sm text-sm text-[#57423e]">
                  Corner of Henry &amp; Sackett Street, Brooklyn, NY 11231
                </p>
              </div>
              <a
                className="bg-[#feeae4] text-[#6b0e06] border border-[#dec0bb] font-label-md uppercase px-4 py-2.5 rounded-lg hover:bg-[#f8e4de] transition-colors flex items-center gap-2"
                href="https://maps.google.com/?q=513+Henry+Street+Brooklyn+NY"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Directions</span>
              </a>
            </div>
          </div>

          {/* Neighborhood Logistics Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Transit Card */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#dec0bb] flex items-start gap-4">
              <div className="p-2.5 bg-[#ffdad4] text-[#6b0e06] rounded-xl shrink-0">
                <Train className="w-6 h-6" />
              </div>
              <div>
                <span className="font-label-lg uppercase text-[#6b0e06] font-bold">
                  Subway Transit
                </span>
                <p className="font-body-sm text-xs text-[#57423e] mt-1.5 leading-relaxed">
                  Take the <strong className="text-[#231916]">F or G train</strong> to the{' '}
                  <strong className="text-[#231916]">Carroll Street Station</strong>. Walk 3 picturesque blocks west along Sackett Street directly to the corner of Henry.
                </p>
              </div>
            </div>

            {/* Counter Etiquette */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#dec0bb] flex items-start gap-4">
              <div className="p-2.5 bg-[#b6edc2] text-[#376847] rounded-xl shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="font-label-lg uppercase text-[#376847] font-bold">
                  Soda Counter Etiquette
                </span>
                <p className="font-body-sm text-xs text-[#57423e] mt-1.5 leading-relaxed">
                  During busy weekend afternoons, grab a ticket at the front register. Spin on our chrome swivel stools, order an egg cream while you wait, and watch the jerks pull soda arms.
                </p>
              </div>
            </div>

            {/* Takeout Pints & Merch */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#dec0bb] flex items-start gap-4">
              <div className="p-2.5 bg-[#ffdcbf] text-[#502b00] rounded-xl shrink-0">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="font-label-lg uppercase text-[#502b00] font-bold">
                  Hand-Packed Takeout Pints
                </span>
                <p className="font-body-sm text-xs text-[#57423e] mt-1.5 leading-relaxed">
                  Fresh pints hand-packed into vintage paper cartons, Fox's U-Bet syrup bottles, and official Brooklyn Farmacy crewneck sweaters available in our dry apothecary cabinet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
