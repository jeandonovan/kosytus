'use client';
import dynamic from 'next/dynamic';
import QualitySelector from '../components/QualitySelector';
import ExportButton from '../components/ExportButton';

const Viewer = dynamic(() => import('../components/scene/Viewer'), { ssr: false });

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <header className="p-4 flex items-center justify-between bg-white shadow-sm">
        <h1 className="text-lg font-medium">Next 3D Light</h1>
        <div className="flex gap-2 items-center">
          <QualitySelector />
          <ExportButton />
        </div>
      </header>

      <section className="flex-1">
        <Viewer />
      </section>

      <footer className="p-3 text-sm text-center text-gray-500">
        Minimal 3D viewer — optimized for low-end machines.
      </footer>
    </main>
  );
}
