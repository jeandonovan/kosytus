import create from 'zustand';

type State = {
  quality: 'low' | 'high';
  setQuality: (q: 'low' | 'high') => void;
};

export const useQualityStore = create<State>((set) => ({
  quality: 'low',
  setQuality: (q) => set({ quality: q })
}));
