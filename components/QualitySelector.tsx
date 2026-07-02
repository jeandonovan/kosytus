'use client';
import { useQualityStore } from '../store/useStore';

export default function QualitySelector() {
  const quality = useQualityStore((s) => s.quality);
  const setQuality = useQualityStore((s) => s.setQuality);

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm">Qualité</label>
      <select
        value={quality}
        onChange={(e) => setQuality(e.target.value as 'low' | 'high')}
        className="border px-2 py-1 rounded bg-white"
      >
        <option value="low">Basse</option>
        <option value="high">Haute</option>
      </select>
    </div>
  );
}
