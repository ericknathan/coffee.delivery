import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { SuccessContainer, TitleContainer } from './styles';

import deliveryIllustration from '../../assets/delivery-illustration.svg';

export function Success() {
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
              Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />{' '}
              Farrapos - Porto Alegre, RS
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
              Pagamento na entrega <br /> <span>Cartão de Crédito</span>
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
