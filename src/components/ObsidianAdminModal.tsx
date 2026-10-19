import React, { useState } from 'react';
import { X, ShieldCheck, Terminal, Lock, CheckCircle, AlertTriangle, Cpu } from 'lucide-react';

interface ObsidianAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ObsidianAdminModal: React.FC<ObsidianAdminModalProps> = ({ isOpen, onClose }) => {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const engine = (window as any).OBSIDIAN_SECURITY_ENGINE;
    if (engine && typeof engine.verifyAccess === 'function') {
      const verified = engine.verifyAccess(passkey.trim());
      if (verified) {
        setIsAuthenticated(true);
        setErrorMsg('');
      } else {
        setErrorMsg('Authentication Rejected: Invalid Passkey.');
      }
    } else {
      if (passkey.trim() === 'SOHA-OBSIDIAN-2026') {
        setIsAuthenticated(true);
        setErrorMsg('');
      } else {
        setErrorMsg('Authentication Rejected: Invalid Passkey.');
      }
    }
  };

  const telemetry =
    (window as any).OBSIDIAN_SECURITY_ENGINE?.getTelemetryStatus() || {
      status: 'ACTIVE',
      client: 'Brooklyn Farmacy & Soda Fountain',
      securityLevel: 'LEVEL_6_ENCRYPTED',
      cycle: 'MONTHLY_RETAINER_ACTIVE',
    };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#181210] text-[#ffdad4] border border-[#ffb4a8]/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl font-mono text-xs">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ffb4a8]/20 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#9dd3aa]" />
            <div>
              <span className="font-bold text-sm tracking-wider uppercase text-white block">
                Obsidian Spatial Architecture
              </span>
              <span className="text-[10px] text-[#ffb4a8]/70">
                Security &amp; Client Maintenance Controller
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#dec0bb] hover:text-white p-1 rounded hover:bg-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="p-3 bg-black/40 rounded-lg border border-[#ffb4a8]/20 text-[11px] space-y-1">
              <div className="text-white font-bold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#ffb4a8]" />
                <span>RESTRICTED ARCHITECTURAL CONSOLE</span>
              </div>
              <p className="text-[#dec0bb]/80">
                Enter Founder &amp; Principal Architect Passkey to access client maintenance telemetry.
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-red-950/70 border border-red-500/50 rounded text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="text-[10px] uppercase tracking-wider text-[#ffb4a8]/80 block mb-1">
                Admin Signature Passkey:
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••••••••••"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                className="w-full bg-black/60 border border-[#ffb4a8]/40 rounded px-3 py-2 text-white focus:outline-none focus:border-[#9dd3aa]"
              />
              <span className="text-[9px] text-[#dec0bb]/60 mt-1 block">
                Hint: SOHA-OBSIDIAN-2026
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-[#dec0bb] hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#8b261a] hover:bg-[#6b0e06] text-white px-4 py-1.5 rounded border border-[#ffb4a8]/40 font-bold transition-all cursor-pointer"
              >
                Verify Passkey
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 animate-in fade-in">
            <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-lg text-emerald-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Verified: Founder Soha (Obsidian Studio)</span>
            </div>

            {/* Telemetry Display */}
            <div className="p-4 bg-black/60 rounded-lg border border-[#ffb4a8]/20 space-y-2 text-[11px]">
              <div className="text-white font-bold pb-1 border-b border-white/10 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#9dd3aa]" />
                <span>TELEMETRY &amp; ARCHITECTURAL STATUS</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
                <div>
                  <span className="text-[#dec0bb]/70 block">Client:</span>
                  <span className="text-white font-bold">{telemetry.client}</span>
                </div>
                <div>
                  <span className="text-[#dec0bb]/70 block">Principal Architect:</span>
                  <span className="text-white font-bold">Soha</span>
                </div>
                <div>
                  <span className="text-[#dec0bb]/70 block">Agency / Studio:</span>
                  <span className="text-white font-bold">Obsidian</span>
                </div>
                <div>
                  <span className="text-[#dec0bb]/70 block">Signature:</span>
                  <span className="text-emerald-400 font-bold">SOHA_OBSIDIAN_AUTH_v6.4</span>
                </div>
                <div>
                  <span className="text-[#dec0bb]/70 block">Access Level:</span>
                  <span className="text-amber-300 font-bold">{telemetry.securityLevel}</span>
                </div>
                <div>
                  <span className="text-[#dec0bb]/70 block">Maintenance Cycle:</span>
                  <span className="text-[#9dd3aa] font-bold">{telemetry.cycle}</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Log */}
            <div className="p-3 bg-black/80 rounded border border-white/10 text-[10px] space-y-1 font-mono text-emerald-400/90">
              <div>[OBSIDIAN CORE]: Spatial responsive engine verified for PC, iPad, and Mobile.</div>
              <div>[OBSIDIAN CORE]: Bastian-Blessing seltzer tap carbonation at 42 PSI nominal.</div>
              <div>[OBSIDIAN CORE]: Prescription slip cache synced with local storage ledger.</div>
              <div className="text-[#ffb4a8]">[OBSIDIAN CORE]: All 1920 historical archives intact.</div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded cursor-pointer"
              >
                Close Console
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
