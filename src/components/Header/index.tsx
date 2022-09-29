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
import { localStorageUserDataKey } from '../../utils/config';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';

export function Header() {
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem(localStorageUserDataKey) || null,
  );
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const amountOfItemsInCart = Object.keys(cartItems).length || 0;

  async function getUserAddress() {
    const { data } = await api.get('https://json.geoiplookup.io/');
    setUserAddress(`${data.city}, ${data.region.replace(/[\W_a-z]/g, '')}`);
  }

  useEffect(() => {
    if (!userAddress) getUserAddress();
  }, [userAddress]);

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
            {userAddress}
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
