import QRCode from 'qrcode';

// Core Function: Generates QR Code on a Canvas with optional overlay logo in the center
export const generateQRCodeWithLogo = async (
  text: string,
  qrColor: string,
  logoUrl?: string | null
): Promise<string> => {
  if (!text) return '';

  const canvas = document.createElement('canvas');
  const size = 300;
  canvas.width = size;
  canvas.height = size;

  // 1. Render Base QR Code onto the temporary canvas
  await QRCode.toCanvas(canvas, text, {
    width: size,
    margin: 2,
    color: {
      dark: qrColor,
      light: '#ffffff'
    },
    errorCorrectionLevel: 'H' // High error tolerance to accommodate middle logo overlay
  });

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas.toDataURL();

  // 2. Overlay Custom Branding Logo if available
  if (logoUrl) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = logoUrl;
      img.onload = () => {
        const logoSize = size * 0.22; // 22% scale ratio of total canvas size
        const x = (size - logoSize) / 2;
        const y = (size - logoSize) / 2;

        // Draw clean white backdrop square with smooth rounded corners behind logo
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(x - 4, y - 4, logoSize + 8, logoSize + 8, 8);
        ctx.fill();

        // Draw image onto center matrix coordinates
        ctx.drawImage(img, x, y, logoSize, logoSize);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => resolve(canvas.toDataURL('image/png'));
    });
  }

  return canvas.toDataURL('image/png');
};
