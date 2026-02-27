import { create } from 'zustand';

type Store = {
    count: number;
    increment: () => void;
    decrement: () => void;
    increaseBy: (value: number) => void;
};

export const useStore = create<Store>()((set) => ({
    count: 100,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    increaseBy: (value) => set((state) => ({ count: state.count + value }))
}));