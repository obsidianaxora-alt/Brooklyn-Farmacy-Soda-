/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EggCreamSpotlight } from './components/EggCreamSpotlight';
import { SundaeMenuSection } from './components/SundaeMenuSection';
import { ApothecaryStorySection } from './components/ApothecaryStorySection';
import { ParlorBuyoutSection } from './components/ParlorBuyoutSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { PrescriptionSlipDrawer } from './components/PrescriptionSlipDrawer';
import { ObsidianAdminModal } from './components/ObsidianAdminModal';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleScrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('sundae-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#fff8f6] text-[#231916] flex flex-col font-body-md selection:bg-[#ffdad4] selection:text-[#410000]">
        {/* Fixed Header */}
        <Header
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenBooking={handleScrollToBooking}
        />

        {/* Main Content Area */}
        <main className="w-full pt-[104px] md:pt-[112px] flex-1">
          {/* Hero Section */}
          <HeroSection
            onReserveClick={handleScrollToBooking}
            onExploreMenu={handleScrollToMenu}
          />

          {/* Interactive Egg Cream Spotlight */}
          <EggCreamSpotlight />

          {/* Sundae & Savory Menu Compendium */}
          <SundaeMenuSection />

          {/* Apothecary Heritage & Lore */}
          <ApothecaryStorySection />

          {/* Private Parlor Buyouts & Event Booking */}
          <ParlorBuyoutSection />

          {/* Plan Your Visit & Logistics */}
          <VisitSection />
        </main>

        {/* Footer */}
        <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

        {/* Prescription Slip Cart Drawer */}
        <PrescriptionSlipDrawer />

        {/* Obsidian Admin & Maintenance Controller */}
        <ObsidianAdminModal
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
        />
      </div>
    </CartProvider>
  );
}
