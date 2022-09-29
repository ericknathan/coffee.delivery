import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  max-width: 17rem;
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;

  background-color: ${({ theme }) => theme['gray-200']};

  text-align: center;
  margin-top: 3rem;

  transition: transform 0.2s ease-in-out;

  h3 {
    color: ${({ theme }) => theme['gray-800']};
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme['gray-600']};
    font-size: 0.875rem;
  }

  > img {
    margin-top: -3rem;
    margin-bottom: 0.25rem;

    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    transform: scale(1.02);

    > img {
      transform: scale(1.05) rotate(20deg);
    }
  }
`;

export const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const ProductLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;

  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-700']};

  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ProductFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  margin-top: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const PriceText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${({ theme }) => theme['gray-700']};

  font-size: 0.875rem;

  strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`;

export const PurchaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['purple-700']};
  color: ${({ theme }) => theme.white};

  cursor: pointer;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }
`;
