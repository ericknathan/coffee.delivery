import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 1230px) {
    grid-template-columns: 1fr;
  }
`;

export const UserFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
  max-width: 80vw;
`;

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['gray-200']};
`;

export const CardHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['yellow-700']};
  }

  h3 {
    color: ${({ theme }) => theme['gray-800']};

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: ${({ theme }) => theme['gray-700']};

    font-size: 0.875rem;
  }
`;

export const UserAddressCard = styled(BaseCard)`
  > div {
    display: grid;
    grid-template-columns: 200px 1fr 60px;
    gap: 1rem;
    position: relative;

    input {
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      outline-offset: 0;

      background-color: ${({ theme }) => theme['gray-300']};
      color: ${({ theme }) => theme['gray-700']};
      outline-color: ${({ theme }) => theme['yellow-700']};

      font-size: 0.875rem;

      &::placeholder {
        opacity: 1;
        color: ${({ theme }) => theme['gray-600']};
      }

      &[name='street'] {
        grid-column: 1 / 4;
      }

      &[name='complement'] {
        grid-column: 2 / 4;
      }
    }

    label {
      position: absolute;
      top: calc(100% - (2.7rem * 2));
      right: 0.75rem;

      color: ${({ theme }) => theme['gray-600']};

      font-size: 0.75rem;
      font-style: italic;
    }

    @media (max-width: 790px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const PaymentCard = styled(BaseCard)`
  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`;

export const PaymentCardOptionsContainer = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 790px) {
    flex-direction: column;
  }
`;

export const PaymentCardOption = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['gray-700']};
  outline-color: transparent;

  text-transform: uppercase;
  font-size: 0.75rem;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme['purple-100']};
    border-color: ${({ theme }) => theme['purple-500']};
  }

  &[data-state='checked']:focus {
    border-color: ${({ theme }) => theme['purple-500']};
  }

  &:not([data-state='checked']):hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`;

export const SelectedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
  max-width: 80vw;
`;

export const CheckoutCard = styled(BaseCard)`
  gap: 0;
  border-radius: 6px 44px;
`;

export const CartProductListContainer = styled.div``;

export const PaymentDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme['gray-700']};

    p:first-child {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
    }
  }

  button {
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.75rem;
    border: none;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme.white};
    outline-color: ${({ theme }) => theme['yellow-500']};

    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;

    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme['yellow-700']};
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme['gray-400']};
  margin: 1.5rem 0;
`;
