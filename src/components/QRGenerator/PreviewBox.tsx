import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { generateQRCodeWithLogo } from '../../utils/qrHelpers';
import { Download } from 'lucide-react';

interface PreviewBoxProps {
  value: string;
  qrColor: string;
  logoUrl?: string | null;
}

export const PreviewBox: React.FC<PreviewBoxProps> = ({ value, qrColor, logoUrl }) => {
  const { t } = useLanguage();
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

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

      {/* Export Premium PNG Button */}
      <div style={{ width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <button
          disabled={!qrDataUrl}
          onClick={handleDownload}
          style={{ width: '100%', padding: '0.75rem', border: 'none', borderRadius: '10px', backgroundColor: qrDataUrl ? 'var(--accent-color)' : '#cbd5e1', color: '#fff', fontWeight: 700, fontSize: '0.9rem', cursor: qrDataUrl ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: qrDataUrl ? '0 4px 12px rgba(16,185,129,0.3)' : 'none', transition: 'all 0.2s' }}
        >
          <Download size={18} />
          {t.exportBtn}
        </button>
      </div>

    </div>
  );
};

