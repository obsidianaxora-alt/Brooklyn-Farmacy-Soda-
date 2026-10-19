import React, { useState } from 'react';
import { BUYOUT_PACKAGES } from '../data/parlorData';
import { CheckCircle2, Camera, Send, FileText, Check, Calendar, Users } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';

export const ParlorBuyoutSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('medium');
  const [hostName, setHostName] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    vinylJukebox: true,
    customSyrups: false,
    photoArchive: false,
  });

  const [submittedData, setSubmittedData] = useState<{
    confirmationNumber: string;
    hostName: string;
    tierName: string;
    totalEst: number;
    date: string;
  } | null>(null);

  const currentPackage = BUYOUT_PACKAGES.find((p) => p.id === selectedTier) || BUYOUT_PACKAGES[1];

  // Calculate total with selected optional add-ons
  const addonCost =
    (addons.vinylJukebox ? 100 : 0) +
    (addons.customSyrups ? 175 : 0) +
    (addons.photoArchive ? 150 : 0);

  const totalEstimatedCost = currentPackage.cost + addonCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playSodaBell();
    const confNumber = `BKF-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedData({
      confirmationNumber: confNumber,
      hostName: hostName || 'Honored Guest',
      tierName: currentPackage.name,
      totalEst: totalEstimatedCost,
      date: eventDate || new Date().toISOString().split('T')[0],
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setHostName('');
    setEmail('');
    setEventDate('');
    setSpecialRequests('');
  };

  return (
    <section className="w-full bg-[#fff8f6] py-16 px-4 lg:px-12" id="booking-section">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#f8e4de] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-[#dec0bb]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Information Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="inline-flex items-center gap-1.5 self-start bg-[#b6edc2] text-[#3b6d4b] px-3 py-1 rounded-full font-label-sm uppercase font-bold">
                Exclusive Access
              </div>

              <h2 className="font-headline-lg text-[#6b0e06] tracking-tight">
                Host a Private Parlor Buyout
              </h2>

              <p className="font-body-md text-[#57423e] leading-relaxed">
                Claim the entire historic apothecary for your milestone birthday, period film shoot, private sundae social, or wedding rehearsal dinner. Full access to our 1920s counter, draft taps, and vintage jukebox.
              </p>

              <div className="flex flex-col gap-2.5 text-sm text-[#231916] font-body-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#376847] shrink-0" />
                  <span>Seating for up to 45 guests; cocktail capacity for 65</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#376847] shrink-0" />
                  <span>Custom DIY Sundae Bar with 12 artisan toppings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#376847] shrink-0" />
                  <span>Unlimited hand-pulled draft sodas &amp; egg creams</span>
                </div>
              </div>

              {/* Archival Polaroid Stamp */}
              <div className="p-3.5 bg-white rounded-xl shadow-xs border border-[#dec0bb] flex items-center gap-3 mt-1">
                <div className="p-2 bg-[#ffdcbf] text-[#502b00] rounded-lg">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label-sm uppercase font-bold text-[#231916] block">
                    Commercial &amp; Film Productions
                  </span>
                  <span className="font-body-sm text-xs text-[#57423e]">
                    Featured on HBO, Food Network, and period cinema.
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Booking Ledger Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#dec0bb] rx-paper-texture">
              <div className="border-b border-[#dec0bb] pb-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-label-lg uppercase text-[#6b0e06] font-bold flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    Parlor Reservation Request
                  </span>
                  <span className="font-label-sm bg-[#feeae4] text-[#57423e] border border-[#dec0bb] px-2.5 py-0.5 rounded uppercase">
                    Carbon Copy Log
                  </span>
                </div>
              </div>

              {submittedData ? (
                /* Carbon Copy Reservation Confirmed View */
                <div className="bg-[#fffdfa] border-2 border-[#376847] p-6 rounded-xl text-left space-y-4 shadow-sm animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-[#376847]/30 pb-3">
                    <div className="flex items-center gap-2 text-[#376847] font-bold font-label-md uppercase">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Reservation Logged into Registry</span>
                    </div>
                    <span className="font-label-sm font-bold bg-[#b6edc2] text-[#00210e] px-2 py-0.5 rounded">
                      {submittedData.confirmationNumber}
                    </span>
                  </div>

                  <p className="font-body-md text-sm text-[#231916] leading-relaxed">
                    Thank you, <strong className="text-[#6b0e06]">{submittedData.hostName}</strong>! Your parlor inquiry for{' '}
                    <strong>{submittedData.tierName}</strong> on <strong>{submittedData.date}</strong> has been transmitted to our Chief Soda Jerk.
                  </p>

                  <div className="bg-[#feeae4] p-3 rounded-lg border border-[#dec0bb] text-xs font-label-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Tier Base Session:</span>
                      <span className="font-bold">${currentPackage.cost}</span>
                    </div>
                    {addonCost > 0 && (
                      <div className="flex justify-between text-[#376847]">
                        <span>Selected Parlor Add-Ons:</span>
                        <span className="font-bold">+${addonCost}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-1 border-t border-[#dec0bb] font-bold text-sm text-[#6b0e06]">
                      <span>Estimated Retainer Total:</span>
                      <span>${submittedData.totalEst}</span>
                    </div>
                  </div>

                  <div className="text-xs text-[#57423e] italic">
                    We will review the parlor diary and dispatch your formal booking agreement within 24 business hours.
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full bg-[#6b0e06] text-white font-label-md uppercase py-2.5 rounded-lg hover:bg-[#8b261a] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Main Interactive Form */
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-label-sm uppercase text-[#8b716d] block mb-1">
                        Host Full Name *
                      </label>
                      <input
                        className="w-full bg-[#feeae4] text-[#231916] font-body-md px-3 py-2 rounded-lg border border-[#dec0bb] focus:outline-none focus:ring-1 focus:ring-[#6b0e06]"
                        placeholder="e.g. Gia Montgomery"
                        required
                        type="text"
                        value={hostName}
                        onChange={(e) => setHostName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="font-label-sm uppercase text-[#8b716d] block mb-1">
                        Email Address *
                      </label>
                      <input
                        className="w-full bg-[#feeae4] text-[#231916] font-body-md px-3 py-2 rounded-lg border border-[#dec0bb] focus:outline-none focus:ring-1 focus:ring-[#6b0e06]"
                        placeholder="gia@brooklynfarmacy.com"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-label-sm uppercase text-[#8b716d] block mb-1">
                        Event Date *
                      </label>
                      <input
                        className="w-full bg-[#feeae4] text-[#231916] font-label-md px-3 py-2 rounded-lg border border-[#dec0bb] focus:outline-none focus:ring-1 focus:ring-[#6b0e06]"
                        required
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="font-label-sm uppercase text-[#8b716d] block mb-1">
                        Guest Headcount Tier *
                      </label>
                      <select
                        className="w-full bg-[#feeae4] text-[#231916] font-body-md px-3 py-2 rounded-lg border border-[#dec0bb] focus:outline-none focus:ring-1 focus:ring-[#6b0e06]"
                        value={selectedTier}
                        onChange={(e) => setSelectedTier(e.target.value)}
                      >
                        <option value="small">Intimate Gathering (10 - 20 Guests)</option>
                        <option value="medium">Standard Parlor Buyout (20 - 45 Guests)</option>
                        <option value="full">Full Film &amp; Production Buyout (Up to 65)</option>
                      </select>
                    </div>
                  </div>

                  {/* Add-ons Selector */}
                  <div className="p-3 bg-[#fff8f6] rounded-xl border border-[#dec0bb]/70">
                    <span className="font-label-sm uppercase text-[#8b716d] font-bold block mb-2">
                      Custom Parlor Experiences (Optional Add-Ons):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-body-sm text-[#231916]">
                      <label className="flex items-center gap-2 p-2 bg-white rounded border border-[#dec0bb] cursor-pointer hover:border-[#6b0e06]">
                        <input
                          type="checkbox"
                          checked={addons.vinylJukebox}
                          onChange={(e) =>
                            setAddons({ ...addons, vinylJukebox: e.target.checked })
                          }
                          className="accent-[#6b0e06]"
                        />
                        <span>Vinyl Jukebox (+$100)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 bg-white rounded border border-[#dec0bb] cursor-pointer hover:border-[#6b0e06]">
                        <input
                          type="checkbox"
                          checked={addons.customSyrups}
                          onChange={(e) =>
                            setAddons({ ...addons, customSyrups: e.target.checked })
                          }
                          className="accent-[#6b0e06]"
                        />
                        <span>Custom Syrups (+$175)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 bg-white rounded border border-[#dec0bb] cursor-pointer hover:border-[#6b0e06]">
                        <input
                          type="checkbox"
                          checked={addons.photoArchive}
                          onChange={(e) =>
                            setAddons({ ...addons, photoArchive: e.target.checked })
                          }
                          className="accent-[#6b0e06]"
                        />
                        <span>Polaroid Photo Pack (+$150)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="font-label-sm uppercase text-[#8b716d] block mb-1">
                      Sundae Bar Selection &amp; Special Requests
                    </label>
                    <textarea
                      className="w-full bg-[#feeae4] text-[#231916] font-body-md px-3 py-2 rounded-lg border border-[#dec0bb] focus:outline-none focus:ring-1 focus:ring-[#6b0e06]"
                      placeholder="Tell us if you need vegan ice cream options, vintage photo setups, or custom syrup flavors..."
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Estimated Ledger Preview */}
                  <div className="p-3.5 bg-[#feeae4] rounded-xl flex items-center justify-between border border-[#dec0bb]">
                    <div>
                      <span className="font-label-sm text-[#8b716d] uppercase block">
                        Estimated Parlor Retainer
                      </span>
                      <span className="font-headline-sm text-xl text-[#6b0e06] font-bold">
                        ${totalEstimatedCost.toLocaleString()} ({currentPackage.duration})
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-label-sm text-[#376847] font-bold uppercase block">
                        Includes Dedicated Jerk
                      </span>
                      <span className="font-label-sm text-[10px] text-[#8b716d]">
                        Soda Artisan Attendant
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-[#8b261a] hover:bg-[#6b0e06] text-white font-label-lg uppercase py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 mt-1 cursor-pointer"
                    type="submit"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Parlor Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
