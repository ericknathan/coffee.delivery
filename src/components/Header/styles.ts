import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90vw;
  max-width: 74rem;
  margin: auto;
  padding: 2rem;

  > img {
    cursor: pointer;
  }
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  cursor: pointer;
  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const UserLocationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  cursor: default;

  background-color: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-700']};
  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`;

export const CartButton = styled(BaseButton)`
  position: relative;
  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-700']};
  outline-color: ${({ theme }) => theme['yellow-700']} !important;

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;

    background-color: ${({ theme }) => theme['yellow-700']};
    color: ${({ theme }) => theme.white};
    outline-color: ${({ theme }) => theme['yellow-700']};

    font-size: 0.75rem;
    font-weight: 700;
  }
`;
