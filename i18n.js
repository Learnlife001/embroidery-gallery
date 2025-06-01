'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Embroidery Gallery",
      "available": "Available",
      "scan": "Scan QR to add on WeChat"
    }
  },
  zh: {
    translation: {
      "title": "刺绣图册",
      "available": "库存",
      "scan": "扫码添加微信",
      "Available": "有货"
    }
  }
};


i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
