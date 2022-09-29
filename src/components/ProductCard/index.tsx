import { useState } from 'react';
import { ShoppingCart } from 'phosphor-react';

import { useCart } from '../../contexts/CartContext';
import { Product } from '../../reducers/cart/reducer';

import { AmountSelector } from '..';
import {
  LabelsContainer,
  PriceText,
  ProductCardContainer,
  ProductFooterContainer,
  ProductLabel,
  PurchaseButton,
} from './styles';

interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  const { addItemToCart, cartItems } = useCart();
  const itemInCart = cartItems[data.id];

  const [productQuantity, setProductQuantity] = useState(() =>
    itemInCart ? itemInCart.quantity : 1,
  );

  function handleAddItemToCart() {
    addItemToCart({
      product: data,
      quantity: productQuantity,
      showToast: true,
    });
  }

  return (
    <ProductCardContainer>
      <img src={data.image} alt="" />
      <LabelsContainer>
        {data.labels.map((label) => (
          <ProductLabel key={label}>{label}</ProductLabel>
        ))}
      </LabelsContainer>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <ProductFooterContainer>
        <PriceText>
          R${' '}
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
              .format(data.price / 100)
              .replace('R$', '')}
          </strong>
        </PriceText>
        <div>
          <AmountSelector
            quantity={productQuantity}
            onChange={setProductQuantity}
          />
          <PurchaseButton
            title="Adicionar produto ao carrinho"
            onClick={handleAddItemToCart}
          >
            <ShoppingCart weight="fill" size={22} />
          </PurchaseButton>
        </div>
      </ProductFooterContainer>
    </ProductCardContainer>
  );
}
