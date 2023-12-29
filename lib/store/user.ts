import { create } from "zustand";
import { User } from "@supabase/supabase-js";

interface UserState {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}
interface SalonStore {
  selectedSalonId: number | null;
  setSelectedSalonId: (id: number | null) => void;
}

interface CartItem {
  id: string;
  title: string;
  precio: number;
  category: string;
  quantity: number;
}

interface Product {
  Nombre: string;
  id: number;
  precio: number;
  quantity: number;
}

interface CartStore {
  selectedProducts: Product[];
  addToCart: (product: Product) => void;
}
interface AppState {
  selectedTableId: string | null;
  setSelectedTableId: (tableId: string | null) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}
export const useUser = create<UserState>()((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));

export const useSalonStore = create<SalonStore>((set) => ({
  selectedSalonId: null,
  setSelectedSalonId: (id) => set({ selectedSalonId: id }),
}));

export const useAppState = create<AppState>((set) => ({
  selectedTableId: null,
  setSelectedTableId: (tableId) => set({ selectedTableId: tableId }),
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
}));

export const useCartStore = create<CartStore>((set) => ({
  selectedProducts: [],
  addToCart: (product) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, product],
    })),
}));
