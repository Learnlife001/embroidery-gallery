'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { SiWechat } from 'react-icons/si';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const ProductCard = ({ product }) => {
  const [showQR, setShowQR] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      style={{
        border: '1px solid #333',
        padding: '1rem',
        borderRadius: '12px',
        backgroundColor: '#111',
        color: '#fff',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
      }}
    >
      <img
        src={product.image}
        alt={product.name_en}
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      />
      <h3>{i18n.language === 'zh' ? product.name_zh : product.name_en}</h3>
      <p>{t('available')}: {t(product.quantity)}</p>

      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        {/* WeChat Button */}
        <div
          onClick={() => setShowQR(!showQR)}
          style={{ position: 'relative', cursor: 'pointer' }}
        >
          <SiWechat size={24} />
          {showQR && (
            <div
              style={{
                position: 'absolute',
                top: '30px',
                left: '-10px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                zIndex: 10,
                textAlign: 'center',
                width: '220px',
              }}
            >
              <img
                src="/images/wechat-qrcode.png"
                alt="WeChat QR"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  marginBottom: '8px',
                }}
              />
              <div>{t('scan')}</div>
            </div>
          )}
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8618368882928"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
