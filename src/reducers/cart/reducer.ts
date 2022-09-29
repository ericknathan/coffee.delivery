import { produce } from 'immer';
import { CartItem, CartItems } from '../../contexts/CartContext';

import { ActionTypes } from './actions';

export interface Product {
  id: number;
  name: string;
  description: string;
  labels: string[];
  price: number;
  image: string;
}

interface CartState {
  cartItems: CartItems;
}

export function cartReducer(currentState: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(currentState, (draft) => {
        draft.cartItems[action.payload.product.id] = {
          product: action.payload.product,
          quantity: action.payload.quantity,
        };
      });
    case ActionTypes.REMOVE_PRODUCT: {
      const { productId } = action.payload;

      return produce(currentState, (draft) => {
        delete draft.cartItems[productId];
      });
    }
    default:
      return currentState;
  }
}
