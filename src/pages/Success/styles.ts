import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;

  > * {
    flex: 1;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;
    margin-top: 2.5rem;
    border-radius: 6px 36px;
    border: 1px solid ${({ theme }) => theme['purple-500']};

    li {
      display: flex;
      gap: 0.75rem;
      list-style: none;

      color: ${({ theme }) => theme['gray-700']};

      > span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;
        border-radius: 9999px;

        background-color: ${({ theme }) => theme['yellow-500']};
        color: ${({ theme }) => theme.white};
      }

      &:first-child > span {
        background-color: ${({ theme }) => theme['purple-500']};
      }

      &:last-child > span {
        background-color: ${({ theme }) => theme['yellow-700']};
      }

      span {
        font-weight: bold;
      }
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  h1 {
    color: ${({ theme }) => theme['yellow-700']};
  }

  p {
    color: ${({ theme }) => theme['gray-800']};
  }
`;
