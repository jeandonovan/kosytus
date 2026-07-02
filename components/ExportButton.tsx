'use client';
import React from 'react';

export default function ExportButton() {
  const handleExport = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
    if (!canvas) {
      alert('Canvas introuvable');
      return;
    }
    // Ensure the canvas is up-to-date (framework uses demand rendering).
    // A small timeout ensures last frame rendered after interactions.
    setTimeout(() => {
      try {
        const data = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = data;
        a.download = 'export.png';
        a.click();
      } catch (e) {
        alert('Échec export image');
      }
    }, 50);
  };

  return (
    <button
      onClick={handleExport}
      className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
    >
      Exporter image
    </button>
  );
}
