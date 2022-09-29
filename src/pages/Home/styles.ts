import styled, { DefaultTheme } from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 5.75rem auto;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    flex: 3;

    margin-right: 3.5rem;

    h1 {
      font-size: 3rem;
      font-weight: 800;
    }

    p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['gray-800']};
    }

    ul {
      display: grid;
      grid-template-columns: auto auto;
      gap: 1.25rem 2.5rem;

      margin-top: 3.125rem;

      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        width: 100%;

        color: ${({ theme }) => theme['gray-700']};

        list-style: none;
      }
    }
  }

  > img {
    flex: 2;
  }
`;

interface BenefitIconProps {
  color: keyof DefaultTheme;
}

export const BenefitIcon = styled.div<BenefitIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 9999px;

  background-color: ${({ theme, color }) => theme[color]};
  color: ${({ theme }) => theme.white};
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 2rem auto;

  h2 {
    margin-bottom: 1rem;

    font-size: 2rem;
    font-weight: 800;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`;

export const EmptyListContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  grid-column: 1 / -1;

  color: ${({ theme }) => theme['gray-800']};

  #loader {
    // rotate animation
    animation: rotate 1s infinite linear;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
