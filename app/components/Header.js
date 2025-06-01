'use client';

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header style={{
  padding: '1rem 2rem',
  backgroundColor: '#222', // darker gray
  color: '#fff',            // white text
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #444'
}}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{t('title')}</h2>
      <div>
        <button onClick={() => switchLanguage('en')} style={{ marginRight: '10px' }}>English</button>
        <button onClick={() => switchLanguage('zh')}>中文</button>
      </div>
    </header>
  );
};

export default Header;
