import React, { useState, useEffect } from 'react';
import { ExternalLink, Lock, CheckCircle2, Sparkles, X, ShieldCheck } from 'lucide-react';

interface AdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

export const AdModal: React.FC<AdModalProps> = ({ isOpen, onClose, onUnlock }) => {
  const [isCounting, setIsCounting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // 🔗 আপনার Monetag Direct Link
  const AD_DIRECT_LINK = "https://omg10.com/4/11375917"; 

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCounting && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsCounting(false);
      setIsUnlocked(true);
    }

    return () => clearInterval(timer);
  }, [isCounting, timeLeft]);

  if (!isOpen) return null;

  const handleStartTask = () => {
    // ১. ক্লিক করার সাথে সাথে Monetag-এর এড লিংক নতুন ট্যাবে খুলবে
    if (AD_DIRECT_LINK) {
      window.open(AD_DIRECT_LINK, '_blank');
    }
    // ২. ১২ সেকেন্ডের কাউন্টডাউন টাইমার চালু হবে
    setIsCounting(true);
  };

  const handleClaimReward = () => {
    onUnlock(); // ১. কাস্টম লোগো আনলক ফিচার সক্রিয় করবে
    onClose();  // ২. মোডালটি বন্ধ করে দেবে
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '420px', backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '1.75rem', color: '#fff', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="#38bdf8" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>Unlock Custom Logo</h3>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.2rem' }}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
          Custom Logo is a premium feature. Simply visit our sponsor page for <strong>12 seconds</strong> to unlock it for free!
        </p>

        {/* Action Button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.25rem' }}>
          {!isUnlocked ? (
            <button
              onClick={handleStartTask}
              disabled={isCounting}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                width: '100%',
                padding: '0.85rem',
                backgroundColor: isCounting ? '#334155' : '#0284c7',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: isCounting ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {isCounting ? (
                <>
                  <Lock size={18} color="#f59e0b" />
                  <span>Unlocking in {timeLeft}s...</span>
                </>
              ) : (
                <>
                  <ExternalLink size={18} />
                  <span>Visit Sponsor to Unlock (12s)</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleClaimReward}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                width: '100%',
                padding: '0.85rem',
                backgroundColor: '#10b981',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              <CheckCircle2 size={18} />
              <span>Feature Unlocked! Upload Logo</span>
            </button>
          )}
        </div>

        {/* Safe Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#64748b' }}>
          <ShieldCheck size={14} color="#10b981" />
          <span>100% Safe & Instant Unlock</span>
        </div>

      </div>
    </div>
  );
};

