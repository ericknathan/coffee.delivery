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
  clearCartAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions';
import { cartReducer, Product } from '../reducers/cart/reducer';
import { localStorageCartStateKey } from '../utils/config';

interface DispatchData {
  type: ActionTypes;
  payload: any;
}

export interface CartItem {
  product: Product;
  quantity: number;
  showToast?: boolean;
}

type AddItemFormData = CartItem;

export type CartItems = { [id: number]: CartItem };

interface CartContextType {
  cartItems: CartItems;
  addItemToCart: (data: AddItemFormData) => void;
  removeItemFromCart: (id: number) => void;
  clearCart: () => void;
  dispatchCartItemsList: (action: DispatchData) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatchCartItemsList] = useReducer(
    cartReducer,
    {
      cartItems: {},
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(localStorageCartStateKey);

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

    localStorage.setItem(localStorageCartStateKey, stateJSON);
  }, [cartState]);

  function addItemToCart(data: AddItemFormData) {
    const { product, quantity, showToast } = data;

    const newItem: CartItem = {
      product,
      quantity,
      showToast: showToast ?? false,
    };

    dispatchCartItemsList(addItemToCartAction(newItem));
  }

  function removeItemFromCart(id: number) {
    dispatchCartItemsList(removeItemFromCartAction(id));
  }

  function clearCart() {
    dispatchCartItemsList(clearCartAction());
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        dispatchCartItemsList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
