import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

async function getProduct(id: number) {
  const { data: product } = await api.get(`/products/${id}`)

  return product
}

async function getStock(id: number): Promise<Stock> {
  const { data: stock } = await api.get(`/stock/${id}`)

  return stock
}

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const product = await getProduct(productId)

      const stock = await getStock(productId)

      const cartIds: number[] = cart.map(product => {
        return product.id
      })

      if (cartIds.includes(productId)) {

        const cartProduct = cart.filter(product => productId === product.id)[0]

        if (cartProduct.amount < stock.amount) {
          const newCart = cart.map(product => {
            if (product.id === productId) {
              return { ...product, amount: product.amount + 1 }
            } else {
              return product
            }
          })
          setCart(newCart)
          localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
        } else {
          toast.error('Quantidade solicitada fora de estoque')
        }

      } else {
        if (stock.amount > 0) {
          const newProduct = { ...product, amount: 1 }
          setCart([...cart, newProduct])
          localStorage.setItem('@RocketShoes:cart', JSON.stringify([...cart, newProduct]))
        } else {
          toast.error('Quantidade solicitada fora de estoque')
        }
      }

    } catch {
      toast.error('Erro na adi????o do produto')
    }
  };

  const removeProduct = async (productId: number) => {
    try {
      const cartIds: number[] = cart.map(product => {
        return product.id
      })

      if (!cartIds.includes(productId)) {
        throw Error
      } else {
        const removedCart = cart.filter(product => product.id !== productId)
        setCart(removedCart)
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(removedCart))
      }
    } catch {
      toast.error('Erro na remo????o do produto')
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) throw Error

      const stockResponse = await api.get(`/stock/${productId}`)
      const stock: Stock = stockResponse.data

      if (amount <= stock.amount) {
        setCart(cart.map(product => {
          if (product.id === productId) {
            product.amount = amount
            return product
          } else {
            return product
          }
        }))
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart))
      } else {
        toast.error('Quantidade solicitada fora de estoque')
      }

    } catch {
      toast.error('Erro na altera????o de quantidade do produto')
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
