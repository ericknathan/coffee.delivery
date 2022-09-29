import styled from 'styled-components';

export const AmountSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.375rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['gray-400']};

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['purple-100']};
    color: ${({ theme }) => theme['purple-500']};

    cursor: pointer;
    transition: filter 0.1s ease-out;

    svg {
      transition: color 0.1s ease-out;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);

      svg {
        color: ${({ theme }) => theme['purple-700']};
      }
    }

    &:focus {
      outline-offset: 0;
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.5rem;
    height: 100%;

    background-color: transparent;

    text-align: center;
  }
`;
