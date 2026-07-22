import React, { useState } from 'react';
import { RootLayout } from '../layouts/RootLayout';
import { useLanguage } from '../context/LanguageContext';
import { GeneratorBox } from '../components/QRGenerator/GeneratorBox';
import { PreviewBox } from '../components/QRGenerator/PreviewBox';
import { Scanner } from './Scanner';
import { Shield, Zap, Share2, Link, FileText, Mail, Phone, MessageSquare, Wifi, Layers, Palette, Download, Plus } from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'generator' | 'scanner'>('generator');
  const [selectedType, setSelectedType] = useState<string>('url');
  const [inputValue, setInputValue] = useState<string>('');
  
  // Default QR Color set to Dark Charcoal (#1e293b)
  const [qrColor, setQrColor] = useState<string>('#1e293b');

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setInputValue(''); 
  };

  const PRESET_COLORS = [
    { name: 'Dark Charcoal', hex: '#1e293b' },
    { name: 'Emerald Green', hex: '#10b981' },
    { name: 'Ocean Blue', hex: '#0284c7' },
    { name: 'Neon Purple', hex: '#a855f7' },
    { name: 'Ruby Red', hex: '#dc2626' }
  ];

  const QR_TYPES_LIST = [
    { icon: Link, title: 'Website URL', desc: 'Direct users to any web address, landing page, or online portfolio.' },
    { icon: FileText, title: 'Plain Text', desc: 'Display custom text messages, notes, or raw alphanumeric string buffers.' },
    { icon: Mail, title: 'Email Dispatch', desc: 'Trigger auto-populated email templates with recipient, subject, and body.' },
    { icon: Phone, title: 'Phone Call', desc: 'Instantly prompt mobile dialers with a pre-configured contact number.' },
    { icon: MessageSquare, title: 'SMS Message', desc: 'Pre-format text messages ready to be sent to designated numbers.' },
    { icon: Wifi, title: 'Wi-Fi Network', desc: 'Allow seamless instant connection without sharing plain text passwords.' }
  ];

  return (
    <RootLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'generator' ? (
        <>
          <section style={{ textAlign: 'center', maxWidth: '640px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem', color: '#0f172a' }}>
              {t.generatorTitle}
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.5 }}>
              {t.generatorSubtitle}
            </p>
          </section>

          {/* MAIN DARK QR GENERATOR BOX */}
          <section 
            id="generator" 
            style={{ 
              width: '100%', 
              maxWidth: '1000px', 
              minHeight: '480px', 
              padding: '2.5rem', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2.5rem',
              backgroundColor: '#111827',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
              color: '#ffffff'
            }}
          >
            {/* Left Column: Form & Custom Color Picker */}
            <div className="generator-inputs" style={{ borderRight: '1px solid #374151', paddingRight: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}>
              <GeneratorBox
                selectedType={selectedType}
                onTypeChange={handleTypeChange}
                inputValue={inputValue}
                onInputChange={setInputValue}
              />

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem', color: '#9ca3af' }}>
                  {t.brandingColor}
                </h4>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  
                  {/* Preset Quick Colors */}
                  {PRESET_COLORS.map((color) => {
                    const isActive = qrColor === color.hex;
                    return (
                      <button
                        key={color.hex}
                        onClick={() => setQrColor(color.hex)}
                        title={color.name}
                        style={{ 
                          width: '32px', 
                          height: '32px', 
                          backgroundColor: color.hex, 
                          border: isActive ? '3px solid #10b981' : '1px solid #4b5563', 
                          borderRadius: '50%', 
                          cursor: 'pointer', 
                          transform: isActive ? 'scale(1.15)' : 'scale(1)', 
                          transition: 'transform 0.2s ease' 
                        }}
                      />
                    );
                  })}

                  {/* UNLIMITED CUSTOM COLOR PICKER BUTTON */}
                  <label 
                    title="Choose Unlimited Custom Color"
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      border: '1px dashed #9ca3af', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      cursor: 'pointer', 
                      backgroundColor: PRESET_COLORS.some(c => c.hex === qrColor) ? '#1f2937' : qrColor,
                      color: '#ffffff',
                      position: 'relative'
                    }}
                  >
                    <Plus size={16} />
                    <input 
                      type="color" 
                      value={qrColor} 
                      onChange={(e) => setQrColor(e.target.value)} 
                      style={{ opacity: 0, position: 'absolute', width: '100%', height: '100%', cursor: 'pointer' }} 
                    />
                  </label>

                </div>
              </div>
            </div>

            {/* Right Column: QR Code Preview Box */}
            <div className="generator-preview" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ marginBottom: '1.5rem', fontWeight: 600, width: '100%', textAlign: 'left', color: '#f3f4f6', cursor: 'default', userSelect: 'none' }}>
                {t.previewTitle}
              </h3>
              <PreviewBox value={inputValue} qrColor={qrColor} />
            </div>
          </section>
        </>
      ) : (
        <Scanner />
      )}

      {/* How to create in 3 simple steps */}
      <section style={{ width: '100%', maxWidth: '1000px' }}>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: '#0f172a' }}>
          {t.howItWorksTitle}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.25rem' }}>
              <Layers size={24} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-color)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Step 01</span>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>{t.step1Title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{t.step1Desc}</p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.25rem' }}>
              <Palette size={24} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-color)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Step 02</span>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>{t.step2Title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{t.step2Desc}</p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.25rem' }}>
              <Download size={24} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-color)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Step 03</span>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>{t.step3Title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{t.step3Desc}</p>
          </div>

        </div>
      </section>

      {/* What types of QR Codes can you create */}
      <section style={{ width: '100%', maxWidth: '1000px' }}>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: '#0f172a' }}>
          {t.typesTitle}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {QR_TYPES_LIST.map((type, idx) => {
            const IconComp = type.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconComp size={20} />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)' }}>{type.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{type.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" style={{ width: '100%', maxWidth: '1000px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem' }}>{t.featuresTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Zap style={{ color: 'var(--accent-color)' }} />
            <h4 style={{ fontWeight: 600 }}>Instant Real-Time Sync</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>Watch your QR code recalculate metrics pixel-by-pixel with every single keystroke instantly.</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Shield style={{ color: 'var(--accent-color)' }} />
            <h4 style={{ fontWeight: 600 }}>100% Secure & Local</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>Data translation is computed entirely client-side. Zero server request footprints means ultimate data privacy.</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Share2 style={{ color: 'var(--accent-color)' }} />
            <h4 style={{ fontWeight: 600 }}>Vector Precise Export</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>Export matrix buffers directly into pristine high-contrast PNG format ready for print media campaigns.</p>
          </div>
        </div>
      </section>

      {/* FAQ Documentation */}
      <section id="docs" className="glass-card" style={{ width: '100%', maxWidth: '1000px', padding: '2.5rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>{t.docsTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ borderBottom: '1px solid var(--card-border-light)', paddingBottom: '1rem' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>What is a client-side QR Matrix Engine?</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>It means the algorithm translates your input characters into a two-dimensional binary array grid using your browser's local JavaScript engine, eliminating server network delays completely.</p>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

