import { MapPin, ShoppingCart } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

import {
  CartButton,
  HeaderActionsContainer,
  HeaderContainer,
  HeaderContentContainer,
  UserLocationButton,
} from './styles';
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';

export function Header() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const amountOfItemsInCart = Object.keys(cartItems).length || 0;

  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <img
          src={coffeeDeliveryLogo}
          alt="Coffee Delivery"
          onClick={() => navigate('/')}
        />
        <HeaderActionsContainer>
          <UserLocationButton>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </UserLocationButton>
          <CartButton title="Carrinho" onClick={() => navigate('/checkout')}>
            {amountOfItemsInCart > 0 && (
              <span
                title={`Você possui ${amountOfItemsInCart} produto(s) no carrinho`}
              >
                {amountOfItemsInCart}
              </span>
            )}
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </HeaderActionsContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
}
