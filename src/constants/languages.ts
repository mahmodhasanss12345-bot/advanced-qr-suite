export interface TranslationSchema {
  generatorTitle: string;
  generatorSubtitle: string;
  selectType: string;
  enterData: string;
  previewTitle: string;
  waitingInput: string;
  generating: string;
  exportBtn: string;
  brandingColor: string;
  syncMsg: string;
  featuresTitle: string;
  docsTitle: string;
  navGenerator: string;
  navScanner: string;
  // New Translation Tokens
  howItWorksTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  typesTitle: string;
}

export type SupportedLanguages = 'en' | 'bn' | 'ur' | 'fa' | 'es';

export const LANGUAGE_LIST = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'bn', label: 'বাংলা', dir: 'ltr' },
  { code: 'ur', label: 'اردو', dir: 'rtl' },
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'es', label: 'Español', dir: 'ltr' }
];

export const TRANSLATIONS: Record<SupportedLanguages, TranslationSchema> = {
  en: {
    generatorTitle: 'Advanced QR Suite',
    generatorSubtitle: 'Create premium, custom, and trackable QR codes instantly.',
    selectType: '1. Select QR Code Type',
    enterData: 'Enter Data',
    previewTitle: '2. Live Preview & Export',
    waitingInput: 'Awaiting live data to encode...',
    generating: 'Generating QR for:',
    exportBtn: 'Export Premium PNG',
    brandingColor: 'Custom QR Branding Color',
    syncMsg: 'Real-time Matrix Synchronized',
    featuresTitle: 'Why Choose Our Advanced Suite?',
    docsTitle: 'Frequently Answered Documentation',
    navGenerator: 'QR Generator',
    navScanner: 'Scan QR Code',
    howItWorksTitle: 'How to create a free QR Code in 3 simple steps',
    step1Title: 'Select Content Type',
    step1Desc: 'Choose URL, Plain Text, Email, Phone, SMS, or Wi-Fi configuration.',
    step2Title: 'Customize Design & Logo',
    step2Desc: 'Pick custom brand colors and embed your center logo for identity.',
    step3Title: 'Download & Share',
    step3Desc: 'Export your high-resolution PNG QR matrix ready for print or web.',
    typesTitle: 'What types of QR Codes can you create for free?'
  },
  bn: {
    generatorTitle: 'অ্যাডভান্সড কিউআর স্যুট',
    generatorSubtitle: 'তাত্ক্ষণিকভাবে প্রিমিয়াম, কাস্টম এবং ট্র্যাকেবল কিউআর কোড তৈরি করুন।',
    selectType: '১. কিউআর কোডের ধরন নির্বাচন করুন',
    enterData: 'ডাটা ইনপুট করুন',
    previewTitle: '২. লাইভ প্রিভিউ এবং এক্সপোর্ট',
    waitingInput: 'এনকোড করার জন্য ডাটার অপেক্ষা করা হচ্ছে...',
    generating: 'যার জন্য কিউআর তৈরি হচ্ছে:',
    exportBtn: 'পাবলিশ প্রিমিয়াম PNG',
    brandingColor: 'কাস্টম কিউআর ব্র্যান্ডিং কালার',
    syncMsg: 'রিয়েল-টাইম ম্যাট্রিক্স সিঙ্ক হয়েছে',
    featuresTitle: 'কেন আমাদের অ্যাডভান্সড স্যুট বেছে নেবেন?',
    docsTitle: 'প্রায়শই জিজ্ঞাসিত ডকুমেন্টেশন',
    navGenerator: 'কিউআর জেনারেটর',
    navScanner: 'কিউআর কোড স্ক্যান করুন',
    howItWorksTitle: 'সহজ ৩টি ধাপে বিনামূল্যে কিউআর কোড তৈরি করুন',
    step1Title: 'কনটেন্ট নির্বাচন করুন',
    step1Desc: 'ইউআরএল, প্লেন টেক্সট, ইমেইল, ফোন, এসএমএস বা ওয়াই-ফাই কনফিগারেশন নির্বাচন করুন।',
    step2Title: 'ডিজাইন ও লোগো কাস্টমাইজ করুন',
    step2Desc: 'কাস্টম ব্র্যান্ডের রঙ চয়ন করুন এবং সেন্টারে নিজস্ব লোগো যুক্ত করুন।',
    step3Title: 'ডাউনলোড এবং শেয়ার করুন',
    step3Desc: 'প্রিন্ট বা ওয়েবে ব্যবহারের জন্য হাই-রেজোলিউশন PNG ডাউনলোড করুন।',
    typesTitle: 'কী কী ধরনের কিউআর কোড ফ্রিতে তৈরি করতে পারবেন?'
  },
  ur: {
    generatorTitle: 'ایڈوانسڈ کیو آر سوٹ',
    generatorSubtitle: 'فوری طور پر پریمیم، کسٹم اور ٹریک ایبل کیو آر کوڈز بنائیں۔',
    selectType: '۱۔ کیو آر کوڈ کی قسم منتخب کریں',
    enterData: 'ڈیٹا درج کریں',
    previewTitle: '۲۔ لائیو پریویو اور ایکسپورٹ',
    waitingInput: 'انکوڈ کرنے کے لیے ڈیٹا کا انتظار ہے...',
    generating: 'کیو آر کوڈ تیار ہو رہا ہے برائے:',
    exportBtn: 'پریمیم PNG ڈاؤن لوڈ کریں',
    brandingColor: 'کسٹم کیو آر برانڈنگ رنگ',
    syncMsg: 'ریئل ٹائم میٹرکس ہم آہنگ ہو گیا',
    featuresTitle: 'ہمارا ایڈوانسڈ سوٹ کیوں منتخب کریں؟',
    docsTitle: 'اکثر پوچھے گئے دستاویزات',
    navGenerator: 'کیو آر جنریٹر',
    navScanner: 'کیو آر کوڈ اسکین کریں',
    howItWorksTitle: '3 آسان مراحل میں مفت کیو آر کوڈ کیسے بنائیں',
    step1Title: 'مواد کی قسم منتخب کریں',
    step1Desc: 'یو آر ایل، ٹیکسٹ، ای میل، فون، ایس ایم ایس یا وائی فائی منتخب کریں۔',
    step2Title: 'ڈیزائن اور لوگو کو کسٹمائز کریں',
    step2Desc: 'کسٹم برانڈ کے رنگ منتخب کریں اور اپنا لوگو شامل کریں۔',
    step3Title: 'ڈاؤن لوڈ اور شیئر کریں',
    step3Desc: 'پرنٹ یا ویب کے لیے اعلی معیار کا PNG ڈاؤن لوڈ کریں۔',
    typesTitle: 'آپ کس قسم کے کیو آر کوڈز مفت بنا سکتے ہیں؟'
  },
  fa: {
    generatorTitle: 'مجموعه پیشرفته QR',
    generatorSubtitle: 'کدهای QR ممتاز، سفارشی و قابل ردیابی را فوراً ایجاد کنید.',
    selectType: '۱. نوع کد QR را انتخاب کنید',
    enterData: 'داده‌ها را وارد کنید',
    previewTitle: '۲. پیش‌نمایش زنده و خروجی',
    waitingInput: 'در انتظار داده‌های زنده برای رمزگذاری...',
    generating: 'در حال تولید QR برای:',
    exportBtn: 'خروجی پریمیم PNG',
    brandingColor: 'رنگ سفارشی برندسازی QR',
    syncMsg: 'ماتریس در زمان واقعی همگام شد',
    featuresTitle: 'چرا مجموعه پیشرفته ما را انتخاب کنید؟',
    docsTitle: 'مستندات متداول پاسخ داده شده',
    navGenerator: 'تولید کننده QR',
    navScanner: 'اسکن کد QR',
    howItWorksTitle: 'ایجاد کد QR رایگان در ۳ مرحله ساده',
    step1Title: 'انتخاب نوع محتوا',
    step1Desc: 'URL، متن ساده، ایمیل، تلفن، پیامک یا وای‌فای را انتخاب کنید.',
    step2Title: 'سفارشی‌سازی طراحی و لوگو',
    step2Desc: 'رنگ‌های سفارشی را انتخاب کنید و لوگوی خود را درج نمایید.',
    step3Title: 'دانلود و اشتراک‌گذاری',
    step3Desc: 'خروجی با کیفیت PNG آماده برای چاپ یا وب دریافت کنید.',
    typesTitle: 'چه نوع کدهای QR را می‌توانید به صورت رایگان ایجاد کنید؟'
  },
  es: {
    generatorTitle: 'Advanced QR Suite',
    generatorSubtitle: 'Cree códigos QR premium, personalizados y rastreables al instante.',
    selectType: '1. Seleccione el tipo de código QR',
    enterData: 'Ingrese datos',
    previewTitle: '2. Vista previa en vivo y exportación',
    waitingInput: 'Esperando datos en vivo para codificar...',
    generating: 'Generando QR para:',
    exportBtn: 'Exportar PNG Premium',
    brandingColor: 'Color de marca QR personalizado',
    syncMsg: 'Matriz en tiempo real sincronizada',
    featuresTitle: '¿Por qué elegir nuestra suite avanzada?',
    docsTitle: 'Documentación respondida con frecuencia',
    navGenerator: 'Generador QR',
    navScanner: 'Escanear código QR',
    howItWorksTitle: 'Cómo crear un código QR gratuito en 3 sencillos pasos',
    step1Title: 'Seleccione el tipo de contenido',
    step1Desc: 'Elija URL, Texto, Correo electrónico, Teléfono, SMS o Wi-Fi.',
    step2Title: 'Personalice diseño y logotipo',
    step2Desc: 'Elija colores de marca e inserte su logotipo central.',
    step3Title: 'Descargar y compartir',
    step3Desc: 'Exporte su matriz QR en PNG de alta resolución lista para imprimir.',
    typesTitle: '¿Qué tipos de códigos QR puedes crear gratis?'
  }
};


