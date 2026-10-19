import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/parlorData';
import { useCart } from '../context/CartContext';
import { Plus, Check, Info, Utensils, Sparkles, Filter } from 'lucide-react';

export const SundaeMenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sundae' | 'drink' | 'savory' | 'takeout'>('all');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const [selectedItemDetail, setSelectedItemDetail] = useState<MenuItem | null>(null);
  const [customNote, setCustomNote] = useState('');
  const { addToCart } = useCart();

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const brokenDreams = MENU_ITEMS.find((i) => i.id === 'broken-dreams')!;
  const potatoHead = MENU_ITEMS.find((i) => i.id === 'mr-potato-head')!;

  const handleQuickAdd = (item: MenuItem) => {
    addToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const handleDetailAdd = (item: MenuItem) => {
    addToCart(item, customNote.trim() || undefined);
    setJustAddedId(item.id);
    setSelectedItemDetail(null);
    setCustomNote('');
    setTimeout(() => setJustAddedId(null), 1500);
  };

  return (
    <section className="w-full bg-[#fff8f6] py-16 px-4 lg:px-12" id="sundae-menu">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-2">
          <span className="font-label-sm uppercase tracking-widest text-[#6b0e06] font-bold">
            Hand-Scooped Formulations
          </span>
          <h2 className="font-headline-lg text-[#6b0e06] tracking-tight">
            The Parlor Sundae &amp; Savory Compendium
          </h2>
          <p className="font-body-md text-[#57423e] leading-relaxed">
            Every sundae is assembled to order inside thick pressed-glass boats, piled with real dairy whipped cream spun fresh three times each morning, and topped with a whole maraschino cherry.
          </p>
        </div>

        {/* Sundae Star Duo (Hero Banners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sundae of Broken Dreams */}
          <div className="bg-white rounded-2xl p-5 lg:p-7 shadow-sm border border-[#dec0bb] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 bg-[#f8e4de] border border-[#dec0bb]/50">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="Sundae of Broken Dreams with crushed pretzels, vanilla ice cream, caramel and whipped cream"
                  src={brokenDreams.imageUrl}
                />
                <div className="absolute top-3 left-3 bg-[#6b0e06] text-white font-label-sm px-2.5 py-1 rounded font-bold uppercase shadow-sm">
                  {brokenDreams.badge}
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline-md text-2xl text-[#6b0e06] font-bold">
                  {brokenDreams.name}
                </h3>
                <span className="font-label-lg text-lg text-[#6b0e06] font-bold">
                  ${brokenDreams.price.toFixed(2)}
                </span>
              </div>

              <p className="font-body-md text-sm text-[#57423e] mb-4 leading-relaxed">
                {brokenDreams.description}
              </p>
            </div>

            <div>
              <div className="bg-[#fff1ed] p-3 rounded-xl mb-3 flex items-center justify-between border border-[#dec0bb]/40">
                <span className="font-label-sm text-[#8b716d] uppercase font-semibold">
                  Profile: {brokenDreams.profile}
                </span>
                <span className="font-label-sm text-[#376847] uppercase font-bold">
                  House Specialty
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickAdd(brokenDreams)}
                  className="flex-1 bg-[#8b261a] hover:bg-[#6b0e06] text-white font-label-md uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  {justAddedId === brokenDreams.id ? (
                    <>
                      <Check className="w-4 h-4 text-[#b6edc2]" />
                      <span>Added to Prescription Slip</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Order Broken Dreams (${brokenDreams.price.toFixed(2)})</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItemDetail(brokenDreams)}
                  className="p-2.5 bg-[#fff1ed] hover:bg-[#feeae4] text-[#6b0e06] border border-[#dec0bb] rounded-lg cursor-pointer"
                  title="View formulation ingredients"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mr. Potato Head */}
          <div className="bg-white rounded-2xl p-5 lg:p-7 shadow-sm border border-[#dec0bb] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 bg-[#f8e4de] border border-[#dec0bb]/50">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="Mr Potato Head ice cream sundae with kettle cooked potato chips and hot fudge"
                  src={potatoHead.imageUrl}
                />
                <div className="absolute top-3 left-3 bg-[#6f3f03] text-[#f1ac6a] font-label-sm px-2.5 py-1 rounded font-bold uppercase shadow-sm">
                  {potatoHead.badge}
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline-md text-2xl text-[#6b0e06] font-bold">
                  {potatoHead.name}
                </h3>
                <span className="font-label-lg text-lg text-[#6b0e06] font-bold">
                  ${potatoHead.price.toFixed(2)}
                </span>
              </div>

              <p className="font-body-md text-sm text-[#57423e] mb-4 leading-relaxed">
                {potatoHead.description}
              </p>
            </div>

            <div>
              <div className="bg-[#fff1ed] p-3 rounded-xl mb-3 flex items-center justify-between border border-[#dec0bb]/40">
                <span className="font-label-sm text-[#8b716d] uppercase font-semibold">
                  Profile: {potatoHead.profile}
                </span>
                <span className="font-label-sm text-[#376847] uppercase font-bold">
                  Locally Sourced Spuds
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickAdd(potatoHead)}
                  className="flex-1 bg-[#8b261a] hover:bg-[#6b0e06] text-white font-label-md uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  {justAddedId === potatoHead.id ? (
                    <>
                      <Check className="w-4 h-4 text-[#b6edc2]" />
                      <span>Added to Prescription Slip</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Order Mr. Potato Head (${potatoHead.price.toFixed(2)})</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItemDetail(potatoHead)}
                  className="p-2.5 bg-[#fff1ed] hover:bg-[#feeae4] text-[#6b0e06] border border-[#dec0bb] rounded-lg cursor-pointer"
                  title="View formulation ingredients"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 pb-2 border-b border-[#dec0bb]/60">
          {[
            { id: 'all', label: 'All Parlor Formulations' },
            { id: 'sundae', label: 'Iconic Sundaes' },
            { id: 'drink', label: 'Draft Floats & Phosphates' },
            { id: 'savory', label: 'Savory Counter Provisions' },
            { id: 'takeout', label: 'Takeout Pints & Merch' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`py-2 px-4 rounded-lg font-label-md uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#6b0e06] text-white shadow-sm font-bold'
                  : 'bg-[#fff1ed] text-[#57423e] hover:bg-[#feeae4] border border-[#dec0bb]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const isAdded = justAddedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-[#dec0bb] p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-lg text-[#6b0e06] font-bold group-hover:text-[#8b261a] transition-colors">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-label-sm font-bold uppercase px-2 py-0.5 rounded ${
                              item.badgeType === 'primary'
                                ? 'bg-[#ffdad4] text-[#410000]'
                                : item.badgeType === 'secondary'
                                ? 'bg-[#b6edc2] text-[#00210e]'
                                : 'bg-[#ffdcbf] text-[#2d1600]'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body-sm text-xs text-[#57423e] mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="font-label-lg text-base text-[#231916] font-bold whitespace-nowrap pl-2">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>

                  {item.profile && (
                    <div className="font-label-sm text-[10px] text-[#8b716d] uppercase mt-2">
                      Notes: {item.profile}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#feeae4] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedItemDetail(item)}
                    className="text-xs font-label-sm uppercase text-[#8b716d] hover:text-[#6b0e06] flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Ingredients</span>
                  </button>

                  <button
                    onClick={() => handleQuickAdd(item)}
                    className="bg-[#feeae4] hover:bg-[#8b261a] hover:text-white text-[#6b0e06] border border-[#dec0bb] px-3.5 py-1.5 rounded-lg text-xs font-label-md uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#376847]" />
                        <span>Prescribed</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Slip</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Item Detail & Customization Modal */}
      {selectedItemDetail && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#6b0e06] rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-start border-b border-[#dec0bb] pb-3 mb-4">
              <div>
                <span className="font-label-sm text-[#8b716d] uppercase tracking-wider block">
                  Apothecary Prescription Slip No. {selectedItemDetail.id.slice(0, 4).toUpperCase()}
                </span>
                <h3 className="font-headline-md text-2xl text-[#6b0e06] font-bold mt-0.5">
                  {selectedItemDetail.name}
                </h3>
              </div>
              <span className="font-label-lg text-xl text-[#231916] font-bold">
                ${selectedItemDetail.price.toFixed(2)}
              </span>
            </div>

            <p className="font-body-md text-[#57423e] text-sm mb-4 leading-relaxed">
              {selectedItemDetail.description}
            </p>

            {selectedItemDetail.ingredients && selectedItemDetail.ingredients.length > 0 && (
              <div className="mb-4 bg-[#fff1ed] p-3.5 rounded-xl border border-[#dec0bb]/60">
                <span className="font-label-sm text-[#6b0e06] uppercase font-bold block mb-1.5">
                  Formulation Ingredients:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-body-sm text-[#57423e]">
                  {selectedItemDetail.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6b0e06]"></span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Custom note for the soda jerk */}
            <div className="mb-5">
              <label className="font-label-sm text-[#8b716d] uppercase block mb-1">
                Special Instructions for the Soda Jerk:
              </label>
              <input
                type="text"
                placeholder="e.g. Extra hot caramel, light whipped cream, allergy note..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full bg-[#feeae4] border border-[#dec0bb] rounded-lg px-3 py-2 text-sm text-[#231916] focus:outline-none focus:ring-1 focus:ring-[#6b0e06]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#dec0bb]/60">
              <button
                type="button"
                onClick={() => {
                  setSelectedItemDetail(null);
                  setCustomNote('');
                }}
                className="px-4 py-2 font-label-md uppercase text-[#8b716d] hover:text-[#231916] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDetailAdd(selectedItemDetail)}
                className="bg-[#8b261a] hover:bg-[#6b0e06] text-white font-label-md uppercase px-5 py-2.5 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add to Prescription Slip</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
