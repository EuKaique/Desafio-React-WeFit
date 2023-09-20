import { create } from 'zustand';

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  updateItemQuantity: (itemId: number, quantity: number) => void;
};

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item: any) => {
    set((state: any) => ({
      cartItems: [...state.cartItems, item],
    }));
  },
  removeFromCart: (itemId: any) => {
    set((state: any) => ({
      cartItems: state.cartItems.filter((item: any) => item.id !== itemId),
    }));
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
  updateItemQuantity: (itemId: any, quantity: number) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity };
        }
        return item;
      });

      return { cartItems: updatedCartItems };
    });
  },
}));

export default useCartStore;