'use client';

import '../i18n';
import Header from './components/Header';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-32 px-6">
        <section className="py-8 max-w-6xl mx-auto">
          <Gallery />
        </section>
      </main>
    </>
  );
}
