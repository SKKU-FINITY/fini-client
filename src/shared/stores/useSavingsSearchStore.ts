import { create } from 'zustand';

type SavingsListItem = {
  productId: number;
  optionId: number;
  bankName: string;
  rsrvTypeNm: string;
  productName: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
};

interface SavingsSearchState {
  selectedBanks: string[];
  saveTerm: number;
  savingsList: SavingsListItem[];
  initialized: boolean;

  setSelectedBanks: (banks: string[] | ((prev: string[]) => string[])) => void;
  setSaveTerm: (term: number) => void;
  setSavingsList: (list: SavingsListItem[]) => void;
  setInitialized: (flag: boolean) => void;

  reset: () => void;
}

export const useSavingsSearchStore = create<SavingsSearchState>((set) => ({
  selectedBanks: [],
  saveTerm: 36,
  savingsList: [],
  initialized: false,

  setSelectedBanks: (banks) =>
    set((state) => ({
      selectedBanks: typeof banks === 'function' ? banks(state.selectedBanks) : banks,
    })),
  setSaveTerm: (term) => set({ saveTerm: term }),
  setSavingsList: (list) => set({ savingsList: list }),
  setInitialized: (flag) => set({ initialized: flag }),

  reset: () =>
    set({
      selectedBanks: [],
      saveTerm: 36,
      savingsList: [],
      initialized: false,
    }),
}));
