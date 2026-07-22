import React, { useState } from 'react';
import { Heart, X, Copy, Check, Wallet, Zap, ShieldCheck, Sparkles, Server } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  if (!isOpen) return null;

  // Binance Pay Nickname & Permanent TRC20 USDT Address
  const BINANCE_NICKNAME = "User-2fa62";
  const USDT_TRC20_ADDRESS = "TPg3UoPkCvNB8UNH1SdJg9vFiqh77do816";

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '480px', backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#fff', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)', position: 'relative' }}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(239, 68, 68, 0.15)', borderRadius: '12px' }}>
              <Heart size={22} color="#ef4444" fill="#ef4444" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>Support Advanced QR Suite</h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Help us keep it 100% free & ad-free</span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Why Support Us Section */}
        <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid #334155', borderRadius: '16px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700 }}>
            <Sparkles size={16} />
            <span>Why Your Support Matters</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            We build high-performance, privacy-focused, and fast web tools. Your generous contribution directly helps us:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#94a3b8' }}>
              <Server size={14} color="#10b981" />
              <span>Cover high-speed server & domain maintenance fees</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#94a3b8' }}>
              <Zap size={14} color="#f59e0b" />
              <span>Develop new features and keep the platform ultra-fast</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#94a3b8' }}>
              <ShieldCheck size={14} color="#6366f1" />
              <span>Maintain 100% user privacy without tracking or intrusive ads</span>
            </div>
          </div>
        </div>

        {/* Support Gateways Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginTop: '0.2rem' }}>
          <Wallet size={16} color="#f0b90b" />
          <span>Global Crypto Payment Gateways</span>
        </div>

        {/* Global Crypto Payment Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          
          {/* 1. Binance Pay Nickname Option */}
          <div style={{ backgroundColor: '#1e293b', padding: '0.85rem 1rem', borderRadius: '14px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '0.4rem', transition: 'border-color 0.2s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f0b90b' }}></div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f0b90b' }}>Binance Pay (Nickname)</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', backgroundColor: 'rgba(240, 185, 11, 0.1)', padding: '0.15rem 0.5rem', borderRadius: '6px' }}>Zero Fee</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginTop: '0.1rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#f8fafc', fontFamily: 'monospace', fontWeight: 600 }}>
                {BINANCE_NICKNAME}
              </span>
              <button
                onClick={() => handleCopy(BINANCE_NICKNAME, 'binance')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.75rem', backgroundColor: '#334155', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', flexShrink: 0, transition: 'background-color 0.2s' }}
              >
                {copiedAccount === 'binance' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                {copiedAccount === 'binance' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* 2. USDT TRC20 Address Option */}
          <div style={{ backgroundColor: '#1e293b', padding: '0.85rem 1rem', borderRadius: '14px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#10b981' }}>USDT Address (TRC20 Network)</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#64748b', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.15rem 0.5rem', borderRadius: '6px' }}>TRON Chain</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginTop: '0.1rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#f8fafc', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {USDT_TRC20_ADDRESS}
              </span>
              <button
                onClick={() => handleCopy(USDT_TRC20_ADDRESS, 'usdt')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.75rem', backgroundColor: '#334155', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', flexShrink: 0, transition: 'background-color 0.2s' }}
              >
                {copiedAccount === 'usdt' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                {copiedAccount === 'usdt' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

        </div>

        {/* Footer info note */}
        <p style={{ margin: 0, textAlign: 'center', fontSize: '0.72rem', color: '#64748b' }}>
          Thank you for supporting open-source & free web applications! ❤️
        </p>

      </div>
    </div>
  );
};

