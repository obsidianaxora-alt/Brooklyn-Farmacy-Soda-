import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, CheckCircle, Printer, ArrowRight } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';

export const PrescriptionSlipDrawer: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    isOpen,
    setIsOpen,
    subtotal,
    tax,
    grandTotal,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'counter' | 'pickup'>('counter');
  const [dispensedOrder, setDispensedOrder] = useState<{
    token: string;
    customer: string;
    time: string;
    total: number;
  } | null>(null);

  if (!isOpen) return null;

  const handleDispense = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playSeltzerFizz(600);
    setTimeout(() => soundEngine.playSodaBell(), 600);
    const token = `RX-${Math.floor(100 + Math.random() * 900)}`;
    setDispensedOrder({
      token,
      customer: customerName || 'Parlor Guest',
      time: '6 - 10 Minutes',
      total: grandTotal,
    });
    clearCart();
  };

  const handleClose = () => {
    setIsOpen(false);
    setDispensedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#fffdfa] h-full shadow-2xl flex flex-col justify-between border-l-2 border-[#6b0e06] animate-in slide-in-from-right duration-300 rx-paper-texture">
        {/* Prescription Header */}
        <div className="p-5 border-b-2 border-dashed border-[#dec0bb] bg-[#fff1ed]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display-lg text-3xl text-[#6b0e06] font-bold">℞</span>
              <div>
                <span className="font-headline-sm text-lg text-[#6b0e06] uppercase font-bold block">
                  Longo's Prescription Pad
                </span>
                <span className="font-label-sm text-[10px] text-[#8b716d] uppercase tracking-wider">
                  Order Slip • Register No. 513-BK
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg text-[#8b716d] hover:text-[#231916] hover:bg-[#feeae4] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Prescription Body Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {dispensedOrder ? (
            /* Dispensed Success Receipt */
            <div className="bg-white border-2 border-[#376847] p-5 rounded-xl space-y-4 shadow-sm animate-in fade-in">
              <div className="flex items-center justify-between border-b border-[#376847]/30 pb-2">
                <span className="font-label-sm text-[#376847] font-bold uppercase flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  Prescription Dispensed
                </span>
                <span className="font-label-md font-bold text-lg bg-[#b6edc2] text-[#00210e] px-2.5 py-0.5 rounded">
                  {dispensedOrder.token}
                </span>
              </div>

              <div className="text-center py-2 space-y-1">
                <p className="font-headline-sm text-xl text-[#6b0e06]">
                  Order in the Soda Taps!
                </p>
                <p className="font-body-sm text-xs text-[#57423e]">
                  Prepared for: <strong>{dispensedOrder.customer}</strong>
                </p>
                <p className="font-label-sm text-[11px] text-[#376847] font-bold">
                  Estimated Fountain Time: ~{dispensedOrder.time}
                </p>
              </div>

              <div className="p-3 bg-[#fff1ed] rounded-lg border border-[#dec0bb] text-xs font-label-sm space-y-1">
                <div className="flex justify-between">
                  <span>Carbonation:</span>
                  <span className="font-bold">42 PSI Triple-Cold</span>
                </div>
                <div className="flex justify-between">
                  <span>Settled Total:</span>
                  <span className="font-bold text-[#6b0e06]">${dispensedOrder.total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full bg-[#feeae4] text-[#6b0e06] border border-[#dec0bb] font-label-md uppercase py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#f8e4de] cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Carbon Slip</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full bg-[#6b0e06] text-white font-label-md uppercase py-2.5 rounded-lg hover:bg-[#8b261a] cursor-pointer"
              >
                Return to Fountain Parlor
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty state */
            <div className="text-center py-16 text-[#8b716d] space-y-3">
              <span className="font-display-lg text-4xl block text-[#dec0bb]">🍨</span>
              <p className="font-headline-sm text-base text-[#231916]">
                Your Prescription Slip is Empty
              </p>
              <p className="font-body-sm text-xs max-w-xs mx-auto leading-relaxed">
                Add an egg cream, Broken Dreams sundae, or house-pressed phosphate from our parlor menu.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#feeae4] text-[#6b0e06] border border-[#dec0bb] px-4 py-2 rounded-lg font-label-md uppercase hover:bg-[#f8e4de] cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Items list */
            <div className="space-y-3">
              <div className="text-xs font-label-sm text-[#8b716d] uppercase tracking-wider pb-1 border-b border-[#dec0bb]">
                Prescribed Fountain Formulations ({items.length})
              </div>

              {items.map((ci) => (
                <div
                  key={ci.cartItemId}
                  className="bg-white border border-[#dec0bb] p-3 rounded-lg shadow-xs flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-headline-sm text-sm text-[#6b0e06] font-bold block">
                        {ci.item.name}
                      </span>
                      {ci.customization && (
                        <span className="font-label-sm text-[10px] text-[#376847] block italic">
                          ↳ {ci.customization}
                        </span>
                      )}
                    </div>
                    <span className="font-label-md text-sm text-[#231916] font-bold">
                      ${(ci.item.price * ci.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#feeae4]">
                    <div className="flex items-center gap-1.5 bg-[#feeae4] rounded-md p-0.5 border border-[#dec0bb]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(ci.cartItemId, -1)}
                        className="p-1 hover:bg-white rounded text-[#6b0e06] cursor-pointer"
                        title="Reduce"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-label-sm text-xs px-2 font-bold">{ci.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(ci.cartItemId, 1)}
                        className="p-1 hover:bg-white rounded text-[#6b0e06] cursor-pointer"
                        title="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(ci.cartItemId)}
                      className="text-xs font-label-sm uppercase text-[#8b716d] hover:text-[#ba1a1a] flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Prescription Footer & Checkout Form */}
        {items.length > 0 && !dispensedOrder && (
          <div className="p-5 border-t-2 border-[#dec0bb] bg-[#fff1ed] space-y-4">
            {/* Form */}
            <form onSubmit={handleDispense} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOrderType('counter')}
                  className={`py-1.5 px-2 rounded-lg font-label-sm uppercase text-center border cursor-pointer ${
                    orderType === 'counter'
                      ? 'bg-[#6b0e06] text-white border-[#6b0e06] font-bold'
                      : 'bg-white text-[#57423e] border-[#dec0bb]'
                  }`}
                >
                  Parlor Counter
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`py-1.5 px-2 rounded-lg font-label-sm uppercase text-center border cursor-pointer ${
                    orderType === 'pickup'
                      ? 'bg-[#6b0e06] text-white border-[#6b0e06] font-bold'
                      : 'bg-white text-[#57423e] border-[#dec0bb]'
                  }`}
                >
                  Curbside Takeout
                </button>
              </div>

              <div>
                <label className="font-label-sm text-[#8b716d] uppercase block mb-1">
                  Recipient Name / Stool #
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor (Stool 4)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-white border border-[#dec0bb] rounded-lg px-3 py-1.5 text-sm text-[#231916] focus:outline-none focus:ring-1 focus:ring-[#6b0e06]"
                />
              </div>

              {/* Ledger breakdown */}
              <div className="space-y-1 font-label-sm text-xs pt-1 border-t border-[#dec0bb]/60">
                <div className="flex justify-between text-[#57423e]">
                  <span>Formulary Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#57423e]">
                  <span>NYC Sales Tax (8.875%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#6b0e06] pt-1 border-t border-[#dec0bb]">
                  <span>Total Dispense Due:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8b261a] hover:bg-[#6b0e06] text-white font-label-lg uppercase py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispense Order to Soda Jerk</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
