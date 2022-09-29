import { CartItem } from '../../contexts/CartContext';

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: item,
  };
}

export function removeItemFromCartAction(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
