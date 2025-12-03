import { create } from 'zustand';

type ProductList = {
  productId: number;
  optionId: number;
  bankName: string;
  productName: string;
  saveTerm: number;
  baseRate: number;
  maxRate: number;
};

interface DepositSearchState {
  selectedBanks: string[];
  saveTerm: number;
  depositList: ProductList[];
  initialized: boolean;

  setSelectedBanks: (banks: string[] | ((prev: string[]) => string[])) => void;
  setSaveTerm: (term: number) => void;
  setDepositList: (list: ProductList[]) => void;
  setInitialized: (flag: boolean) => void;

  reset: () => void;
}

export const useDepositSearchStore = create<DepositSearchState>((set) => ({
  selectedBanks: [],
  saveTerm: 36,
  depositList: [],
  initialized: false,

  setSelectedBanks: (banks) =>
    set((state) => ({
      selectedBanks: typeof banks === 'function' ? banks(state.selectedBanks) : banks,
    })),
  setSaveTerm: (term) => set({ saveTerm: term }),
  setDepositList: (list) => set({ depositList: list }),
  setInitialized: (flag) => set({ initialized: flag }),

  reset: () =>
    set({
      selectedBanks: [],
      saveTerm: 36,
      depositList: [],
      initialized: false,
    }),
}));
