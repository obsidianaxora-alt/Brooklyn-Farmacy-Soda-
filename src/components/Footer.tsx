import React, { useState } from 'react';
import { Send, CheckCircle2, History, Heart, Shield } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    soundEngine.playSodaBell();
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#fff1ed] pt-16 pb-12 border-t border-[#dec0bb]/60">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#dec0bb]/50">
        {/* Column 1: Heritage */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <span className="font-headline-sm text-lg text-[#6b0e06] uppercase font-bold">
            Longo's Prescription Pharmacy
          </span>
          <p className="font-body-sm text-xs text-[#57423e] leading-relaxed">
            Originally Longo's Pharmacy est. 1920. Lovingly restored in 2010 by Peter Freeman &amp; Gia Giasullo. Keeping the historic art of the Brooklyn soda fountain and handcrafted phosphate alive.
          </p>
          <div className="flex items-center gap-1.5 font-label-sm text-[#502b00] uppercase mt-2">
            <History className="w-3.5 h-3.5" />
            <span>Archival Register No. 513-BK</span>
          </div>
        </div>

        {/* Column 2: Location & Hours */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <span className="font-label-lg uppercase text-[#6b0e06] font-bold tracking-wider">
            Fountain Location
          </span>
          <p className="font-body-sm text-sm text-[#231916] font-semibold">513 Henry Street</p>
          <p className="font-body-sm text-xs text-[#57423e]">
            Corner of Sackett St &amp; Henry St<br />
            Carroll Gardens, Brooklyn, NY 11231
          </p>
          <div className="mt-3">
            <span className="font-label-lg uppercase text-[#6b0e06] font-bold tracking-wider block mb-1">
              Service Hours
            </span>
            <p className="font-body-sm text-xs text-[#57423e] leading-relaxed">
              Wednesday – Friday: 2:00 PM – 10:00 PM<br />
              Saturday &amp; Sunday: 11:00 AM – 10:30 PM<br />
              Monday &amp; Tuesday: Parlor Closed for Restocking
            </p>
          </div>
        </div>

        {/* Column 3: The Brooklyn Gazette Postcard */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="p-5 bg-white rounded-2xl shadow-sm border border-[#dec0bb]">
            <span className="font-headline-sm text-base text-[#6b0e06] uppercase font-bold block">
              The Brooklyn Gazette Postcard
            </span>
            <p className="font-body-sm text-xs text-[#57423e] my-2 leading-relaxed">
              Subscribe for apothecary dispatches, secret seasonal sundae drops, and soda workshop invitations.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#b6edc2] text-[#00210e] rounded-lg text-xs font-label-sm font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Postcard Dispatched! You are inscribed in our parlor registry.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  className="bg-[#feeae4] text-[#231916] font-label-md px-3 py-2 rounded-lg flex-1 border border-[#dec0bb] focus:outline-none focus:ring-1 focus:ring-[#6b0e06] text-xs placeholder:text-[#8b716d]"
                  placeholder="Your Postal or Digital Address"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-[#8b261a] hover:bg-[#6b0e06] text-white font-label-lg uppercase px-4 py-2 rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                  type="submit"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dispatch</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright & Secondary Links */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[#57423e] font-label-sm text-[10px] uppercase gap-3">
        <p>© 1920–2026 Brooklyn Farmacy &amp; Soda Fountain Co. All Rights Reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="hover:text-[#6b0e06] transition-colors"
            href="#egg-cream-spotlight"
          >
            Apothecary Registry
          </a>
          <a
            className="hover:text-[#6b0e06] transition-colors"
            href="#sundae-menu"
          >
            Sanitation Ledger
          </a>
          <a
            className="hover:text-[#6b0e06] transition-colors"
            href="#booking-section"
          >
            Press Inquiries
          </a>
          <button
            onClick={onOpenAdmin}
            className="text-[#6b0e06] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Shield className="w-3 h-3" />
            <span>Obsidian Maintenance</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
