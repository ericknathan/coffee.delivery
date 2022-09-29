import { useEffect, useState } from 'react';
import { Trash } from 'phosphor-react';

import { useCart } from '../../contexts/CartContext';
import { Product } from '../../reducers/cart/reducer';

import { CartItemContainer, QuantityActionsContainer } from './styles';
import { priceFormatter } from '../../utils/formatter';
import { AmountSelector } from '../AmountSelector';

interface ProductCardProps {
  data: Product;
}

export function CartItem({ data }: ProductCardProps) {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();
  const itemInCart = cartItems[data.id];

  const [productQuantity, setProductQuantity] = useState(() =>
    itemInCart ? itemInCart.quantity : 1,
  );

  useEffect(() => {
    addItemToCart({
      product: data,
      quantity: productQuantity,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productQuantity]);

  return (
    <CartItemContainer>
      <article>
        <img src={`${data.image}`} alt="" />
        <div>
          <h4>{data.name}</h4>
          <QuantityActionsContainer>
            <AmountSelector
              quantity={productQuantity}
              onChange={setProductQuantity}
            />
            <button type="button" onClick={() => removeItemFromCart(data.id)}>
              <Trash />
              Remover
            </button>
          </QuantityActionsContainer>
        </div>
      </article>
      <span>{priceFormatter.format(productQuantity * (data.price / 100))}</span>
    </CartItemContainer>
  );
}
