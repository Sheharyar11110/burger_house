import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  customizations?: {
    extraCheese?: boolean
    extraPatty?: boolean
    spicy?: boolean
  }
}

interface CartStore {
  items: CartItem[]
  lastAddedItem: { name: string; quantity: number } | null
  clearLastAddedItem: () => void
  addItem: (item: Omit<CartItem, 'quantity'>, showToast?: boolean) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      lastAddedItem: null,
      
      clearLastAddedItem: () => set({ lastAddedItem: null }),
      
      addItem: (item, showToast = true) => {
        const items = get().items
        const existingItem = items.find(i => i.id === item.id)
        
        if (existingItem) {
          set({
            items: items.map(i =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            lastAddedItem: showToast ? { name: item.name, quantity: existingItem.quantity + 1 } : null
          })
        } else {
          set({ 
            items: [...items, { ...item, quantity: 1 }],
            lastAddedItem: showToast ? { name: item.name, quantity: 1 } : null
          })
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter(i => i.id !== id) })
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        
        set({
          items: get().items.map(i =>
            i.id === id ? { ...i, quantity } : i
          )
        })
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
      
      getTotalItems: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity,
          0
        )
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)