import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Camera, RefreshCw, Copy, Check } from 'lucide-react';

export const Scanner: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    // Senior Architect Tip: Initialize Scanner instance inside useEffect to protect DOM lifecycles
    const scanner = new Html5QrcodeScanner(
      'reader', // Matches the target div ID below
      {
        fps: 10, // Frames per second decoding refresh rate
        qrbox: { width: 250, height: 250 }, // Core scanning boundary square box area
        aspectRatio: 1.0
      },
      /* verbose= */ false
    );

    // Dynamic Execution Hook on successful QR text extraction
    const onScanSuccess = (decodedText: string) => {
      setScanResult(decodedText);
      scanner.clear(); // Halt webcam feed immediately to prevent loop resource leaks
    };

    const onScanFailure = (error: any) => {
      // Quietly logging frame analytical data without breaking UI rendering threads
      console.warn(`QR scanning diagnostic frame stream: ${error}`);
    };

    scanner.render(onScanSuccess, onScanFailure);

    // Garbage Collection Protocol: Clear instance when component unmounts
    return () => {
      scanner.clear().catch(err => console.error("Failed to clear scanner on unmount", err));
    };
  }, []);

  const handleCopy = async () => {
    if (!scanResult) return;
    await navigator.clipboard.writeText(scanResult);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset state after 2 seconds
  };

  const resetScanner = () => {
    setScanResult(null);
    window.location.reload(); // Hard reset component viewport buffer cleanly
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', gap: '2rem' }}>
      
      {/* Dynamic Camera Feed Glass Container */}
      <div className="glass-card" style={{ width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', alignSelf: 'flex-start', color: 'var(--text-main)' }}>
          <Camera size={20} style={{ color: 'var(--accent-color)' }} />
          <h3 style={{ fontWeight: 600 }}>Webcam Live Stream Matrix</h3>
        </div>

        {/* Target Injection node node for html5-qrcode framework rendering engine */}
        <div id="reader" style={{ width: '100%', maxWidth: '450px', borderRadius: '16px', overflow: 'hidden', border: '1px dashed var(--card-border-light)', backgroundColor: '#000' }}></div>
      </div>

      {/* Analytical Scan Extraction Output Panel */}
      {scanResult && (
        <div className="glass-card" style={{ width: '100%', padding: '2rem', borderLeft: '5px solid var(--accent-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontWeight: 700, color: 'var(--text-main)' }}>Decoded Output Payload Data</h4>
          
          <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '12px', border: '1px solid var(--card-border-light)', wordBreak: 'break-all', fontFamily: 'monospace', fontSize: '0.95rem', color: 'var(--text-main)' }}>
            {scanResult}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button
              onClick={handleCopy}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', border: 'none', borderRadius: '10px', backgroundColor: isCopied ? '#10b981' : 'var(--text-main)', color: '#fff', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
            >
              {isCopied ? <Check size={16} /> : <Copy size={16} />}
              {isCopied ? 'Copied' : 'Copy Result'}
            </button>
            <button
              onClick={resetScanner}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', border: '1px solid var(--card-border-light)', borderRadius: '10px', backgroundColor: 'transparent', color: 'var(--text-main)', fontWeight: 600, cursor: 'pointer' }}
            >
              <RefreshCw size={16} />
              Scan Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
