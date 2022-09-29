import { produce } from 'immer';
import { CartItems } from '../../contexts/CartContext';
import toast from 'react-hot-toast';

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
    case ActionTypes.ADD_PRODUCT: {
      if (!action.payload.product) {
        return currentState;
      }

      const { product, quantity, showToast } = action.payload;

      showToast &&
        toast.success(
          quantity > 1
            ? `${quantity} unidades de ${product.name} adicionadas ao carrinho`
            : `${product.name} adicionado ao carrinho`,
          {
            id: product.id,
          },
        );
      return produce(currentState, (draft) => {
        draft.cartItems[action.payload.product.id] = {
          product,
          quantity,
        };
      });
    }
    case ActionTypes.REMOVE_PRODUCT: {
      const { productId } = action.payload;

      toast.success(`Produto removido do carrinho`, {
        id: productId,
      });

      return produce(currentState, (draft) => {
        delete draft.cartItems[productId];
      });
    }
    case ActionTypes.CLEAR_CART:
      return produce(currentState, (draft) => {
        draft.cartItems = {};
      });
    default:
      return currentState;
  }
}
