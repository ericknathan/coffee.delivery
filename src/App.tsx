import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            backgroundColor: defaultTheme['gray-300'],
            color: defaultTheme['gray-800'],
          },
          iconTheme: {
            primary: defaultTheme['purple-500'],
            secondary: defaultTheme['gray-300'],
          },
        }}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}
