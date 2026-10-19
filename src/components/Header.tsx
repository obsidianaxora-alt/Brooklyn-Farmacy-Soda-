import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MapPin, Sparkles, Clock, Menu, X, Receipt, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsOpen: setIsCartOpen } = useCart();

  const navLinks = [
    { label: 'Fountain & Sundaes', href: '#sundae-menu' },
    { label: 'The Apothecary Story', href: '#apothecary-story' },
    { label: 'Private Parlor Buyouts', href: '#booking-section' },
    { label: 'Plan Your Visit', href: '#plan-visit' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#fff8f6]/95 backdrop-blur-md shadow-[0_4px_16px_rgba(35,25,22,0.06)] border-b border-[#dec0bb]/60 transition-all">
      {/* Top Atmosphere & Operating Ribbon */}
      <div className="bg-[#f8e4de] border-b border-[#dec0bb]/40 py-1.5 px-4 lg:px-12 text-center flex items-center justify-between text-[#57423e] font-label-sm">
        <div className="flex items-center gap-1.5 uppercase">
          <MapPin className="w-3.5 h-3.5 text-[#6b0e06]" />
          <span>513 Henry St, Carroll Gardens, Brooklyn</span>
        </div>

        <div className="flex items-center gap-2 font-bold text-[#376847] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#376847] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#376847]"></span>
          </span>
          <span>Open Today • Seltzer Taps Flowing</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-[#6f3f03] uppercase">
          <Clock className="w-3 h-3" />
          <span>Prescription Fountain Est. 1920</span>
        </div>
      </div>

      {/* Main Parlor Navigation Banner */}
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between gap-4">
        {/* Emblem & Title */}
        <a href="#" className="flex items-center gap-3 group text-left">
          <img
            alt="Brooklyn Farmacy Vintage Emblem"
            className="h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6BMPLIIC6n-1bS3SHDxSu3rclkQ-bXGCUFzFc86DHTQ_JdmWGQzlWJyy2SXnJz0-mHHoqCBV4n9sLKoCc_am0Qy8wC2NEMyHrgDT3gl-66lvDiACnXyXRsmTaBnZQlSU00JiIGZ1f-ndbxHN6TPhrGNkhzYx2nACqQZTQYkoZvLRG50xqXc9FiYMfKZ9JjvuuV9eCOoGFXgB2IXPRCW2FOq7ASJKyayanIDWRpWIPpj9ugI9jkRCMiw"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-base md:text-xl tracking-wide text-[#6b0e06] uppercase font-bold group-hover:text-[#8b261a] transition-colors">
              Brooklyn Farmacy &amp; Soda Fountain
            </span>
            <span className="font-label-sm text-[9px] md:text-[10px] text-[#57423e] uppercase tracking-widest hidden sm:inline-block">
              Restored Apothecary &amp; Fountain Parlor • Kings County
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-label-lg uppercase text-[#57423e] hover:text-[#231916] hover:bg-[#fff1ed] transition-all py-1.5 px-3 rounded cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Prescription Cart Slip Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-1.5 bg-[#fff1ed] hover:bg-[#feeae4] text-[#6b0e06] border border-[#dec0bb] px-3 py-2 rounded-lg font-label-md uppercase transition-all shadow-sm cursor-pointer"
            title="Open Prescription Order Slip"
          >
            <Receipt className="w-4 h-4 text-[#8b261a]" />
            <span className="hidden sm:inline">Rx Slip</span>
            {totalCount > 0 && (
              <span className="bg-[#8b261a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full font-label-sm animate-bounce">
                {totalCount}
              </span>
            )}
          </button>

          {/* Book a Table / Buyout CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center bg-[#8b261a] text-white font-label-lg uppercase px-4 py-2 rounded-lg hover:bg-[#6b0e06] transition-all shadow-[2px_2px_0px_rgba(35,25,22,0.18)] cursor-pointer"
          >
            Book a Table / Buyout
          </button>

          {/* Obsidian Admin & Maintenance Authentication Key */}
          <button
            onClick={onOpenAdmin}
            title="Obsidian Spatial Architecture Engine & Maintenance"
            className="w-8 h-8 rounded-full bg-[#6b0e06] hover:bg-[#8b261a] flex items-center justify-center transition-transform hover:scale-110 shadow-sm cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-white" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#6b0e06] hover:bg-[#feeae4] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fff8f6] border-b border-[#dec0bb] px-6 py-5 shadow-lg flex flex-col gap-3">
          <div className="text-xs font-label-sm text-[#8b716d] uppercase tracking-wider pb-1 border-b border-[#dec0bb]/50">
            Apothecary Navigation
          </div>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-label-lg text-left text-sm uppercase text-[#231916] hover:text-[#6b0e06] py-2 px-2 rounded hover:bg-[#feeae4] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#8b261a] text-white font-label-lg uppercase py-2.5 rounded-lg text-center shadow-md cursor-pointer"
            >
              Book a Table / Buyout
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full bg-[#feeae4] text-[#6b0e06] font-label-lg uppercase py-2.5 rounded-lg text-center border border-[#dec0bb] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Receipt className="w-4 h-4" />
              <span>View Prescription Slip ({totalCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
