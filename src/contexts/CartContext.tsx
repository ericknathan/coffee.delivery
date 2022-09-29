import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  ActionTypes,
  addItemToCartAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions';
import { cartReducer, Product } from '../reducers/cart/reducer';

interface DispatchData {
  type: ActionTypes;
  payload: any;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

type AddItemFormData = CartItem;

export type CartItems = { [id: number]: CartItem };

interface CartContextType {
  cartItems: CartItems;
  addItemToCart: (data: AddItemFormData) => void;
  removeItemFromCart: (id: number) => void;
  dispatchCartItemsList: (action: DispatchData) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

const localStorageKey = '@coffee-delivery:cart-state-1.0.0';

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatchCartItemsList] = useReducer(
    cartReducer,
    {
      cartItems: {},
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(localStorageKey);

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        cartItems: {},
      };
    },
  );

  const { cartItems } = cartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);

    localStorage.setItem(localStorageKey, stateJSON);
  }, [cartState]);

  function addItemToCart(data: AddItemFormData) {
    const { product, quantity } = data;

    const newItem: CartItem = {
      product,
      quantity,
    };

    dispatchCartItemsList(addItemToCartAction(newItem));
  }

  function removeItemFromCart(id: number) {
    dispatchCartItemsList(removeItemFromCartAction(id));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        dispatchCartItemsList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
