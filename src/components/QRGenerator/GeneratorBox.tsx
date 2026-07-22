import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

import { Link, FileText, Mail, Phone, MessageSquare, Wifi, Upload, Image as ImageIcon } from 'lucide-react';
import { AdModal } from './AdModal';

interface GeneratorBoxProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  inputValue: string;
  onInputChange: (val: string) => void;
  onLogoUpload?: (logoUrl: string | null) => void;
}

export const GeneratorBox: React.FC<GeneratorBoxProps> = ({
  selectedType,
  onTypeChange,
  inputValue,
  onInputChange,
  onLogoUpload
}) => {
  const { t } = useLanguage();

  // 🔒 Lock & Modal States
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [logoFileName, setLogoFileName] = useState<string | null>(null);

  // 📁 Hidden File Input Reference
  const fileInputRef = useRef<HTMLInputElement>(null);

  const TYPE_OPTIONS = [
    { id: 'url', label: 'URL', icon: Link },
    { id: 'text', label: 'Plain Text', icon: FileText },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'phone', label: 'Phone', icon: Phone },
    { id: 'sms', label: 'SMS', icon: MessageSquare },
    { id: 'wifi', label: 'Wi-Fi', icon: Wifi }
  ];

  const getPlaceholder = () => {
    switch (selectedType) {
      case 'url': return 'https://example.com';
      case 'text': return 'Type your custom message here...';
      case 'email': return 'target@example.com';
      case 'phone': return '+1 234 567 8900';
      case 'sms': return '+1 234 567 8900';
      case 'wifi': return 'WIFI:S:MyNetwork;P:Password123;;';
      default: return 'Enter data...';
    }
  };

  // 🔓 1. Modal trigger function on task completion
  const handleUnlockAndTriggerUpload = () => {
    setIsUnlocked(true);
    
    setTimeout(() => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }, 150);
  };

  // 🔘 2. Button click logic for Logo Upload
  const handleUploadButtonClick = () => {
    if (!isUnlocked) {
      setIsAdModalOpen(true);
    } else {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };

  // 📂 3. Process Uploaded Logo File
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        if (onLogoUpload && typeof reader.result === 'string') {
          onLogoUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      
      {/* 1. Type Select Grid Buttons */}
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem', color: '#9ca3af' }}>
          {t.selectType}
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
          {TYPE_OPTIONS.map((item) => {
            const Icon = item.icon;
            const isActive = selectedType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTypeChange(item.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.8rem 0.5rem',
                  border: isActive ? '2px solid #10b981' : '1px solid #374151',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(16, 185, 129, 0.15)' : '#1f2937',
                  color: isActive ? '#10b981' : '#d1d5db',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Input Field Area */}
      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#9ca3af' }}>
          Enter {selectedType.toUpperCase()} Data
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={getPlaceholder()}
          style={{
            width: '100%',
            padding: '0.8rem 1rem',
            borderRadius: '12px',
            border: '1px solid #374151',
            backgroundColor: '#1f2937',
            color: '#ffffff',
            fontSize: '0.95rem',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* 3. Premium Custom Logo Upload Section */}
      <div style={{ borderTop: '1px solid #374151', paddingTop: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ImageIcon size={16} color="#38bdf8" />
            Custom Logo (Optional)
          </label>
          {!isUnlocked && (
            <span style={{ fontSize: '0.7rem', backgroundColor: '#0284c7', color: '#fff', padding: '0.15rem 0.5rem', borderRadius: '6px', fontWeight: 700 }}>
              FREE TASK
            </span>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />

        <button
          onClick={handleUploadButtonClick}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            padding: '0.75rem',
            backgroundColor: isUnlocked ? '#065f46' : '#1f2937',
            border: isUnlocked ? '1px solid #10b981' : '1px dashed #4b5563',
            borderRadius: '12px',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Upload size={16} color={isUnlocked ? '#10b981' : '#9ca3af'} />
          <span>
            {logoFileName 
              ? `Logo: ${logoFileName}` 
              : isUnlocked 
                ? 'Upload Custom Logo' 
                : 'Unlock & Upload Custom Logo (12s)'}
          </span>
        </button>
      </div>

      {/* 🚀 Ad Modal */}
      <AdModal
        isOpen={isAdModalOpen}
        onClose={() => setIsAdModalOpen(false)}
        onUnlock={handleUnlockAndTriggerUpload}
      />

    </div>
  );
};

