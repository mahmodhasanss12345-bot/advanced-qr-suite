// Define interfaces for strict TypeScript type safety
export interface QRType {
  id: string;
  label: string;
  icon: string;
  placeholder: string;
}

// Industry Best Practice: Centralizing all application configurations
export const QR_TYPES: QRType[] = [
  { id: 'url', label: 'URL', icon: 'Link', placeholder: 'https://example.com' },
  { id: 'text', label: 'Plain Text', icon: 'FileText', placeholder: 'Enter your text here...' },
  { id: 'email', label: 'Email', icon: 'Mail', placeholder: 'target@example.com' },
  { id: 'phone', label: 'Phone', icon: 'Phone', placeholder: '+1234567890' },
  { id: 'sms', label: 'SMS', icon: 'MessageSquare', placeholder: 'Enter SMS body text...' },
  { id: 'wifi', label: 'Wi-Fi', icon: 'Wifi', placeholder: 'Enter Network SSID...' }
];

export const APP_INFO = {
  title: 'Advanced QR Suite',
  subtitle: 'Create premium, custom, and trackable QR codes instantly.',
  version: '1.0.0'
};
