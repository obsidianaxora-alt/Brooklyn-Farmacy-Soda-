import React, { useState } from 'react';
import { Sparkles, Sliders, Volume2, ShoppingBag, Check } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/parlorData';

export const EggCreamSpotlight: React.FC = () => {
  const [flavor, setFlavor] = useState<'chocolate' | 'vanilla' | 'strawberry'>('chocolate');
  const [psi, setPsi] = useState<number>(42);
  const [isPullingTap, setIsPullingTap] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const { addToCart } = useCart();

  const eggCreamItem = MENU_ITEMS.find((m) => m.id === 'classic-egg-cream') || MENU_ITEMS[3];

  const handlePullDraft = () => {
    setIsPullingTap(true);
    soundEngine.playSeltzerFizz(1100);
    setTimeout(() => {
      soundEngine.playSodaBell();
      setIsPullingTap(false);
    }, 1100);
  };

  const handleAddToCart = () => {
    const flavorName =
      flavor === 'chocolate'
        ? "Fox's U-Bet Chocolate"
        : flavor === 'vanilla'
        ? 'Golden Bourbon Vanilla'
        : 'Farm Fresh Strawberry';
    addToCart(eggCreamItem, `${flavorName} • Pulled at ${psi} PSI`, flavorName);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  // Calculate foam head height based on carbonation PSI
  // 30 PSI -> 1.6", 42 PSI -> 2.2", 48 PSI -> 2.6"
  const foamHeightInches = ((psi / 42) * 2.2).toFixed(1);
  const effervescencePct = Math.min(100, Math.round((psi / 48) * 100));

  return (
    <section className="w-full bg-[#fff1ed] py-16 px-4 lg:px-12 border-y border-[#dec0bb]/60" id="egg-cream-spotlight">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="font-label-sm text-[#376847] uppercase tracking-widest font-bold">
              The Holy Grail of Kings County
            </span>
            <h2 className="font-headline-lg text-[#6b0e06] tracking-tight mt-1">
              The Fountain Drink Spotlight: Brooklyn Egg Cream
            </h2>
          </div>
          <div className="bg-[#feeae4] border border-[#dec0bb] px-4 py-1.5 rounded-full self-start md:self-auto font-label-sm text-[#57423e] uppercase">
            Draft Dispenser No. 1 • Restored Bastian-Blessing Tap
          </div>
        </div>

        {/* Bento Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Formula Breakdown Card */}
          <div className="lg:col-span-7 bg-white border border-[#dec0bb] p-6 lg:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-lg uppercase tracking-wider text-[#6b0e06] font-bold">
                  Apothecary Prescription No. 04
                </span>
                <span className="font-label-sm bg-[#b6edc2] text-[#3b6d4b] px-2.5 py-1 rounded font-bold uppercase">
                  Neither Eggs Nor Cream
                </span>
              </div>

              <h3 className="font-headline-md text-2xl text-[#231916] mb-2 leading-snug">
                "Just Pure Brooklyn Magic Pulled with a Violent Velvet Froth"
              </h3>

              <p className="font-body-md text-[#57423e] mb-6 leading-relaxed">
                A century-old riddle with a singular answer: fresh whole milk from upstate dairies, genuine Fox's U-Bet chocolate syrup, and a piercing stream of seltzer shot from an antique draft arm to churn a two-inch foaming crown.
              </p>

              {/* Anatomical 3-Part Recipe Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="p-3.5 bg-[#feeae4] rounded-xl flex flex-col border border-[#dec0bb]/50">
                  <span className="font-label-sm text-[#8b716d] uppercase">Component 01</span>
                  <span className="font-headline-sm text-lg text-[#6b0e06] mt-1 font-bold">Whole Cold Milk</span>
                  <span className="font-body-sm text-xs text-[#57423e] mt-1">
                    Precisely chilled to 36°F, coating the glass bottom.
                  </span>
                </div>

                <div className="p-3.5 bg-[#feeae4] rounded-xl flex flex-col border border-[#dec0bb]/50">
                  <span className="font-label-sm text-[#8b716d] uppercase">Component 02</span>
                  <span className="font-headline-sm text-lg text-[#6b0e06] mt-1 font-bold">Fox's U-Bet</span>
                  <span className="font-body-sm text-xs text-[#57423e] mt-1">
                    Authentic Brooklyn recipe crafted with real cocoa.
                  </span>
                </div>

                <div className="p-3.5 bg-[#feeae4] rounded-xl flex flex-col border border-[#dec0bb]/50">
                  <span className="font-label-sm text-[#8b716d] uppercase">Component 03</span>
                  <span className="font-headline-sm text-lg text-[#376847] mt-1 font-bold">{psi} PSI Seltzer</span>
                  <span className="font-body-sm text-xs text-[#57423e] mt-1">
                    Violent velocity aerates the liquid into silk.
                  </span>
                </div>
              </div>

              {/* Live Pressure Dial Control */}
              <div className="my-5 p-3.5 bg-[#fff8f6] border border-[#dec0bb] rounded-xl">
                <div className="flex items-center justify-between text-xs font-label-sm uppercase mb-2">
                  <span className="font-bold text-[#231916] flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#376847]" />
                    Adjust Bastian-Blessing Carbonation Pressure:
                  </span>
                  <span className="text-[#376847] font-bold text-sm">{psi} PSI</span>
                </div>
                <input
                  type="range"
                  min="32"
                  max="48"
                  value={psi}
                  onChange={(e) => setPsi(Number(e.target.value))}
                  className="w-full accent-[#376847] cursor-pointer"
                />
                <div className="flex justify-between font-label-sm text-[10px] text-[#8b716d] mt-1 uppercase">
                  <span>32 PSI (Mellow Bubble)</span>
                  <span>42 PSI (Standard Farmacy Pull)</span>
                  <span>48 PSI (Crisp Nitro Silk)</span>
                </div>
              </div>
            </div>

            {/* Interactive Flavor Selector */}
            <div className="pt-4 bg-[#f8e4de] -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 p-6 lg:p-8 rounded-b-2xl border-t border-[#dec0bb]">
              <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
                <span className="font-label-sm uppercase font-bold text-[#231916]">
                  Interactive Fizz Selector:
                </span>
                <span className="font-label-sm text-[#6b0e06] uppercase font-bold">
                  {flavor === 'chocolate' && "Traditional Fox's Chocolate Selected"}
                  {flavor === 'vanilla' && "Pure Golden Bourbon Vanilla Selected"}
                  {flavor === 'strawberry' && "Wild Farm Fresh Strawberry Selected"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFlavor('chocolate')}
                  className={`py-2.5 px-3 font-label-md uppercase rounded-lg text-center transition-all cursor-pointer ${
                    flavor === 'chocolate'
                      ? 'bg-[#6b0e06] text-white shadow-md font-bold'
                      : 'bg-white text-[#231916] hover:bg-[#fff8f6] border border-[#dec0bb]'
                  }`}
                >
                  Fox's U-Bet Chocolate
                </button>

                <button
                  type="button"
                  onClick={() => setFlavor('vanilla')}
                  className={`py-2.5 px-3 font-label-md uppercase rounded-lg text-center transition-all cursor-pointer ${
                    flavor === 'vanilla'
                      ? 'bg-[#6b0e06] text-white shadow-md font-bold'
                      : 'bg-white text-[#231916] hover:bg-[#fff8f6] border border-[#dec0bb]'
                  }`}
                >
                  Golden Vanilla
                </button>

                <button
                  type="button"
                  onClick={() => setFlavor('strawberry')}
                  className={`py-2.5 px-3 font-label-md uppercase rounded-lg text-center transition-all cursor-pointer ${
                    flavor === 'strawberry'
                      ? 'bg-[#6b0e06] text-white shadow-md font-bold'
                      : 'bg-white text-[#231916] hover:bg-[#fff8f6] border border-[#dec0bb]'
                  }`}
                >
                  Wild Strawberry
                </button>
              </div>

              <div className="mt-3 text-xs font-body-sm text-[#57423e] leading-relaxed">
                {flavor === 'chocolate' &&
                  'Classic recipe: Deep, rich cocoa tone tempered with sparkling fizz. Served with a long soda spoon and a paper straw.'}
                {flavor === 'vanilla' &&
                  'A delicate, golden floral recipe made with pure Madagascar vanilla extract, whole milk, and high-velocity effervescent froth.'}
                {flavor === 'strawberry' &&
                  'Bright and nostalgic, made with macerated summer strawberries and whole milk for a pastel pink carbonated treat.'}
              </div>

              {/* Action Buttons Row */}
              <div className="mt-4 pt-3 border-t border-[#dec0bb]/60 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handlePullDraft}
                  disabled={isPullingTap}
                  className="bg-[#376847] hover:bg-[#2c5339] text-white font-label-lg uppercase px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isPullingTap ? 'Pulling Seltzer Tap...' : 'Pull Seltzer Draft Tap'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="bg-[#8b261a] hover:bg-[#6b0e06] text-white font-label-lg uppercase px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  {addedSuccess ? <Check className="w-4 h-4 text-[#b6edc2]" /> : <ShoppingBag className="w-4 h-4" />}
                  <span>{addedSuccess ? 'Prescribed to Slip!' : 'Add to Order Slip ($6.50)'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Glass Visualizer & Chemistry Gauge */}
          <div className="lg:col-span-5 bg-[#f8e4de] rounded-2xl p-6 lg:p-8 shadow-sm border border-[#dec0bb] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-label-sm uppercase text-[#8b716d]">Glass Profile: Libbey 12oz Bell</span>
                <span className="font-label-sm text-[#376847] font-bold text-sm">$6.50 at Counter</span>
              </div>

              <div className="relative w-full h-72 rounded-xl overflow-hidden bg-white border border-[#dec0bb] flex items-center justify-center">
                <img
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isPullingTap ? 'scale-105 filter contrast-110' : ''
                  }`}
                  alt="Vintage Brooklyn Egg Cream in a ribbed bell glass with frothy foam head"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeKMny-lAkH1dXMZqoUVVqXNx6-cPxrPnqQofTfenn3iyjaglGLkBfS8vkPu41P075-eeCYzy5FQ3b52j8BvKyyQHs2zmRmsPs4IkZaL27kZ4t1LdtSpm_vFyJjeD0DtRobwhEToVxZuWRyyzH97B18cKJtV-lw9LqhiKriknbKTpEDk4nlGwmrtU-ypTNjXIQO5HEn3eIM-iRnZKGHAR_qFYreq_xrvDDO4b2RWuf2mlK9h0pkAHzdQ"
                />

                {/* Seltzer aerator animation indicator */}
                {isPullingTap && (
                  <div className="absolute inset-0 bg-[#376847]/15 flex items-center justify-center backdrop-blur-[1px]">
                    <div className="bg-white/95 px-4 py-2 rounded-full shadow-lg text-center font-label-md uppercase text-[#376847] font-bold animate-pulse">
                      ⚡ 42 PSI Seltzer Jet Aerating...
                    </div>
                  </div>
                )}

                {/* Froth Meter Gauge Overlay */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-md border border-[#dec0bb]/60">
                  <span className="font-label-sm uppercase text-[#6b0e06] font-bold block">Head Density</span>
                  <span className="font-headline-sm text-2xl text-[#376847] font-bold">
                    {foamHeightInches} Inches
                  </span>
                </div>
              </div>
            </div>

            {/* Seltzer Phosphatometer Scale */}
            <div className="mt-5 p-4 bg-white rounded-xl border border-[#dec0bb]">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-label-sm uppercase text-[#231916] font-bold">Effervescence Rating</span>
                <span className="font-label-sm text-[#376847] font-bold">
                  {effervescencePct}% Crisp / Zero Flatness
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#feeae4] h-3 rounded-full overflow-hidden p-0.5 border border-[#dec0bb]/50">
                <div
                  className="bg-[#376847] h-full rounded-full transition-all duration-700"
                  style={{ width: `${effervescencePct}%` }}
                ></div>
              </div>

              <div className="flex justify-between font-label-sm text-[9px] text-[#8b716d] mt-1.5 uppercase">
                <span>Still Tap</span>
                <span>Standard Seltzer</span>
                <span>Draft Brooklyn Charge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
