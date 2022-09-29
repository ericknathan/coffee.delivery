import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useCart } from '../../contexts/CartContext';
import { CartItem } from '../../components';

import {
  CardHeader,
  CartProductListContainer,
  CheckoutCard,
  CheckoutContainer,
  Divider,
  PaymentCard,
  PaymentCardOption,
  PaymentCardOptionsContainer,
  PaymentDataContainer,
  SelectedProductsContainer,
  UserAddressCard,
  UserFormContainer,
} from './styles';
import { priceFormatter } from '../../utils/formatter';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [itemsTotal, setItemsTotal] = useState(() => {
    return Object.values(cartItems).reduce((accumulator, item) => {
      return accumulator + (item.product.price / 100) * item.quantity;
    }, 0);
  });

  const deliveryTotal = Number((itemsTotal * 0.118).toFixed(1));

  function handleBuyProducts(event: FormEvent) {
    event.preventDefault();

    navigate('/checkout/success');
  }

  useEffect(() => {
    const total = Object.values(cartItems).reduce((accumulator, item) => {
      return accumulator + (item.product.price / 100) * item.quantity;
    }, 0);
    setItemsTotal(total);
  }, [cartItems]);

  return (
    <CheckoutContainer onSubmit={handleBuyProducts}>
      <UserFormContainer>
        <h2>Complete seu pedido</h2>
        <UserAddressCard>
          <CardHeader>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardHeader>
          <div>
            <input type="text" required name="zip-code" placeholder="CEP" />
            <input type="text" required name="street" placeholder="Rua" />
            <input type="text" required name="number" placeholder="Número" />
            <>
              <input
                type="text"
                name="complement"
                id="complement"
                placeholder="Complemento"
              />
              <label htmlFor="complement">Opcional</label>
            </>
            <input
              type="text"
              required
              name="neighborhood"
              placeholder="Bairro"
            />
            <input type="text" required name="city" placeholder="Cidade" />
            <input type="text" required name="state" placeholder="UF" />
          </div>
        </UserAddressCard>
        <PaymentCard>
          <CardHeader>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeader>
          <PaymentCardOptionsContainer name="payment" required>
            <PaymentCardOption value="credit">
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentCardOption>
            <PaymentCardOption value="debit">
              <Bank size={16} />
              Cartão de débito
            </PaymentCardOption>
            <PaymentCardOption value="cash">
              <Money size={16} />
              Dinheiro
            </PaymentCardOption>
          </PaymentCardOptionsContainer>
        </PaymentCard>
      </UserFormContainer>
      <SelectedProductsContainer>
        <h2>Cafés selecionados</h2>
        <CheckoutCard>
          <CartProductListContainer>
            {Object.values(cartItems).map(({ product }) => (
              <div key={product.id}>
                <CartItem data={product} />
                <Divider />
              </div>
            ))}
          </CartProductListContainer>
          <PaymentDataContainer>
            <div>
              <p>Total de itens</p>
              <span>{priceFormatter.format(itemsTotal)}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>{priceFormatter.format(deliveryTotal)}</span>
            </div>
            <div>
              <p>
                <strong>Total</strong>
              </p>
              <span>
                <strong>
                  {priceFormatter.format(itemsTotal + deliveryTotal)}
                </strong>
              </span>
            </div>
            <button>Confirmar pedido</button>
          </PaymentDataContainer>
        </CheckoutCard>
      </SelectedProductsContainer>
    </CheckoutContainer>
  );
}
