import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGE_LIST } from '../constants/languages';
import type { SupportedLanguages } from '../constants/languages';
import { DonationModal } from '../components/DonationModal';
import { Heart } from 'lucide-react';

interface RootLayoutProps {
  children: React.ReactNode;
  activeTab: 'generator' | 'scanner';
  onTabChange: (tab: 'generator' | 'scanner') => void;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children, activeTab, onTabChange }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isDonationOpen, setIsDonationOpen] = useState<boolean>(false);

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      {/* Header with Navigation & Support Button */}
      <header style={{ padding: '1.2rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--card-border-light)', position: 'sticky', top: 0, zIndex: 100 }}>
        
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--accent-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>
            Q
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-main)' }}>
            {t.generatorTitle}
          </span>
        </div>

        {/* Controls Matrix */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <nav style={{ display: 'flex', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
            <button 
              onClick={() => onTabChange('generator')}
              style={{ padding: '0.5rem 1rem', border: 'none', background: activeTab === 'generator' ? 'rgba(16, 185, 129, 0.15)' : 'transparent', color: activeTab === 'generator' ? 'var(--accent-color)' : 'var(--text-muted)', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, transition: 'all 0.2s' }}
            >
              {t.navGenerator}
            </button>
            <button 
              onClick={() => onTabChange('scanner')}
              style={{ padding: '0.5rem 1rem', border: 'none', background: activeTab === 'scanner' ? 'rgba(16, 185, 129, 0.15)' : 'transparent', color: activeTab === 'scanner' ? 'var(--accent-color)' : 'var(--text-muted)', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, transition: 'all 0.2s' }}
            >
              {t.navScanner}
            </button>
          </nav>

          {/* GLOBAL SUPPORT BUTTON */}
          <button
            onClick={() => setIsDonationOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.9rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
          >
            <Heart size={16} fill="#ef4444" />
            Support Us
          </button>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as SupportedLanguages)}
            style={{ padding: '0.4rem 0.75rem', borderRadius: '10px', border: '1px solid var(--card-border-light)', backgroundColor: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', cursor: 'pointer', outline: 'none' }}
          >
            {LANGUAGE_LIST.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 1rem', gap: '4rem' }}>
        {children}

        {/* CTA Banner */}
        <div style={{ width: '100%', maxWidth: '1000px', backgroundColor: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '20px', padding: '2.5rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#14532d', margin: 0 }}>
            Create QR Codes in a jiffy! Start for free and customize today.
          </h2>
          <button 
            onClick={() => onTabChange('generator')}
            style={{ padding: '0.8rem 2rem', border: 'none', borderRadius: '10px', backgroundColor: 'var(--accent-color)', color: '#fff', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}
          >
            Try for free
          </button>
        </div>
      </main>

      {/* Dark Footer Section */}
      <footer style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '4rem 2rem 2rem 2rem', marginTop: '3rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', borderBottom: '1px solid #334155', paddingBottom: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ backgroundColor: 'var(--accent-color)', width: '24px', height: '24px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>Q</span>
              {t.generatorTitle}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>
              The ultimate high-performance, client-side QR generation and scanning suite.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem' }}>Quick Actions</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#94a3b8' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => onTabChange('generator')}>QR Code Generator</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onTabChange('scanner')}>Webcam Scanner</li>
              <li style={{ cursor: 'pointer', color: '#ef4444' }} onClick={() => setIsDonationOpen(true)}>Support Us ❤️</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#94a3b8' }}>
              <li>Documentation</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem' }}>Contact</h4>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
              Support: support@qrsuite.com<br />
              Client-side Engine v2.0
            </p>
          </div>
        </div>
        <div style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
          <p>&copy; {new Date().getFullYear()} {t.generatorTitle}. All Rights Reserved.</p>
          <p>Built with React & TypeScript</p>
        </div>
      </footer>

      {/* Global Donation Modal */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />

    </div>
  );
};


