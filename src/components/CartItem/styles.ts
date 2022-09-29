import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;

  article {
    display: flex;
    gap: 1.25rem;

    > img {
      width: 4rem;
      height: 4rem;
      margin: auto 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h4 {
        color: ${({ theme }) => theme['gray-800']};
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }

  > span {
    color: ${({ theme }) => theme['gray-700']};

    font-weight: 700;
    font-size: 1rem;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const QuantityActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border: none;
    border-radius: 6px;

    color: ${({ theme }) => theme['gray-700']};

    font-size: 0.875rem;
    text-transform: uppercase;

    cursor: pointer;
    transition: background-color 0.1s ease-out;

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }

    &:hover {
      background-color: ${({ theme }) => theme['gray-500']};
    }
  }
`;
