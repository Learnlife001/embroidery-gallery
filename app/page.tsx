'use client';

import '../i18n';
import Header from './components/Header';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Header />
      <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Gallery />
      </section>
    </main>
  );
}
