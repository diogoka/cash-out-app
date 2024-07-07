import { create } from 'zustand';
import { RowsTotal } from '@/types/types';

interface TotalCashState {
  TotalByRow: RowsTotal;
  update: (bankNote: number, newValue: number) => void;
  totalCash: number;
  setTotalCash: (newValue: number) => void;
}

export const useCashStore = create<TotalCashState>()((set) => ({
  TotalByRow: { 100: 0 },
  totalCash: 0,

  setTotalCash: (newValue) => set((state) => ({ totalCash: newValue })),
  update: (bankNote, newValue) =>
    set((state) => ({
      TotalByRow: {
        ...state.TotalByRow,
        [bankNote]: newValue,
      },
    })),
}));
