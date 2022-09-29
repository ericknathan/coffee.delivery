import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  CircleNotch,
} from 'phosphor-react';

import {
  BenefitIcon,
  EmptyListContainer,
  HomeContainer,
  IntroContainer,
  ProductListContainer,
} from './styles';
import introCoffeeImage from '../../assets/intro-image.png';
import { ProductCard } from '../../components';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Product } from '../../reducers/cart/reducer';

export function Home() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await api.get('/products');
      setProductList(response.data);
    } catch (error) {
      console.log('FETCH_PRODUCTS', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    document.title = 'Coffee Delivery | Página inicial';
  }, []);

  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <BenefitIcon color="yellow-700">
                <ShoppingCart size={16} weight="fill" />
              </BenefitIcon>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <BenefitIcon color="gray-700">
                <Package size={16} weight="fill" />
              </BenefitIcon>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <BenefitIcon color="yellow-500">
                <Timer size={16} weight="fill" />
              </BenefitIcon>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <BenefitIcon color="purple-500">
                <Coffee size={16} weight="fill" />
              </BenefitIcon>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <img
          src={introCoffeeImage}
          alt="Copo de café Coffee Delivery e grãos de café ao fundo"
        />
      </IntroContainer>
      <ProductListContainer>
        <h2>Nossos cafés</h2>
        <div>
          {isLoading ? (
            <EmptyListContainer>
              <CircleNotch size={24} id="loader" weight="bold" />
              Carregando...
            </EmptyListContainer>
          ) : (
            <>
              {productList.length > 0 ? (
                productList.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))
              ) : (
                <EmptyListContainer>
                  <Coffee size={32} />
                  Nenhum produto encontrado
                </EmptyListContainer>
              )}
            </>
          )}
        </div>
      </ProductListContainer>
    </HomeContainer>
  );
}
