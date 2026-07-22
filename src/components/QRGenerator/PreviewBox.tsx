import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { generateQRCodeWithLogo } from '../../utils/qrHelpers';
import { AdModal } from './AdModal';
import { Download, Image as ImageIcon, Lock, Check } from 'lucide-react';


interface PreviewBoxProps {
  value: string;
  qrColor: string;
}

export const PreviewBox: React.FC<PreviewBoxProps> = ({ value, qrColor }) => {
  const { t } = useLanguage();
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isAdModalOpen, setIsAdModalOpen] = useState<boolean>(false);
  const [isLogoFeatureUnlocked, setIsLogoFeatureUnlocked] = useState<boolean>(false);

  // Dynamic Canvas Matrix Engine Execution
  useEffect(() => {
    let isMounted = true;
    const buildQR = async () => {
      if (!value) {
        setQrDataUrl('');
        return;
      }
      const dataUrl = await generateQRCodeWithLogo(value, qrColor, logoUrl);
      if (isMounted) {
        setQrDataUrl(dataUrl);
      }
    };
    buildQR();
    return () => {
      isMounted = false;
    };
  }, [value, qrColor, logoUrl]);

  // Handle Logo Upload File Input
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `custom-qr-${Date.now()}.png`;
    link.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '1.5rem' }}>
      
      {/* Target Canvas QR Display Card */}
      <div style={{ width: '240px', height: '240px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid var(--card-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.06)', overflow: 'hidden', position: 'relative' }}>
        {qrDataUrl ? (
          <img src={qrDataUrl} alt="Generated QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        ) : (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>
            {t.waitingInput}
          </p>
        )}
      </div>

      {/* Reward-Gated Custom Logo Action Control */}
      <div style={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        
        {!isLogoFeatureUnlocked ? (
          <button
            onClick={() => setIsAdModalOpen(true)}
            style={{ width: '100%', padding: '0.65rem', border: '1px dashed var(--accent-color)', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.05)', color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
          >
            <Lock size={16} />
            Unlock Custom Center Logo (12s)
          </button>
        ) : (
          <label style={{ width: '100%', padding: '0.65rem', border: '1px solid var(--accent-color)', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            {logoUrl ? <Check size={16} /> : <ImageIcon size={16} />}
            {logoUrl ? 'Change Center Logo' : 'Upload Center Logo'}
            <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ display: 'none' }} />
          </label>
        )}

        {/* Export Premium PNG Button */}
        <button
          disabled={!qrDataUrl}
          onClick={handleDownload}
          style={{ width: '100%', padding: '0.75rem', border: 'none', borderRadius: '10px', backgroundColor: qrDataUrl ? 'var(--accent-color)' : '#cbd5e1', color: '#fff', fontWeight: 700, fontSize: '0.9rem', cursor: qrDataUrl ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: qrDataUrl ? '0 4px 12px rgba(16,185,129,0.3)' : 'none', transition: 'all 0.2s' }}
        >
          <Download size={18} />
          {t.exportBtn}
        </button>
      </div>

      {/* Ad Modal Portal Component */}
      <AdModal
        isOpen={isAdModalOpen}
        onClose={() => setIsAdModalOpen(false)}
        onUnlock={() => setIsLogoFeatureUnlocked(true)}
      />
    </div>
  );
};

