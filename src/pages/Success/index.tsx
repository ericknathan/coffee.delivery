import { Navigate, useLocation } from 'react-router-dom';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import { SuccessContainer, TitleContainer } from './styles';
import deliveryIllustration from '../../assets/delivery-illustration.svg';
import { PurchaseFormInputs } from '../Checkout';
import { useEffect } from 'react';
import { localStorageUserDataKey } from '../../utils/config';

const paymentMethodText = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  money: 'Dinheiro',
};

export function Success() {
  const { state: routeState } = useLocation();

  useEffect(() => {
    document.title = 'Coffee Delivery | Compra realizada com sucesso';
  }, []);

  useEffect(() => {
    if (routeState.city) {
      localStorage.setItem(
        localStorageUserDataKey,
        `${routeState.city}, ${routeState.state}`,
      );
    }
  }, [routeState]);

  if (routeState === null) {
    return <Navigate replace to="/" />;
  }

  const { address, number, neighborhood, city, state, paymentMethod } =
    routeState as PurchaseFormInputs;

  return (
    <SuccessContainer>
      <div>
        <TitleContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContainer>
        <ul>
          <li>
            <span>
              <MapPin weight="fill" />
            </span>
            <p>
              Entrega em{' '}
              <span>
                {address}, {number}
              </span>{' '}
              <br /> {neighborhood} - {city}, {state}
            </p>
          </li>
          <li>
            <span>
              <Timer weight="fill" />
            </span>
            <p>
              Previsão de entrega <br /> <span>20 min - 30 min</span>
            </p>
          </li>
          <li>
            <span>
              <CurrencyDollar weight="fill" />
            </span>
            <p>
              Pagamento na entrega <br />{' '}
              <span>{paymentMethodText[paymentMethod]}</span>
            </p>
          </li>
        </ul>
      </div>
      <img
        src={deliveryIllustration}
        alt="Ilustração de uma pessoa entregadora"
      />
    </SuccessContainer>
  );
}
