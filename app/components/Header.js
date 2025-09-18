'use client';

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Centered Title */}
        <h2 className="text-2xl font-bold text-center flex-1">{t('title')}</h2>

        {/* Right-Aligned Language Buttons */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => switchLanguage('en')}
            className="bg-white text-black font-medium px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            EN
          </button>
          <button
            onClick={() => switchLanguage('zh')}
            className="bg-white text-black font-medium px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            中文
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
