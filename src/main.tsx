import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { LanguageProvider } from './context/LanguageContext'; // নতুন ইঞ্জিন যোগ করা হয়েছে
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  </React.StrictMode>
);
