import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z as zod } from 'zod';

import {
  Bank,
  Coffee,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useCart } from '../../contexts/CartContext';
import { CartItem } from '../../components';

import {
  CardHeader,
  CartProductListContainer,
  CheckoutCard,
  CheckoutContainer,
  Divider,
  EmptyCartContainer,
  PaymentCard,
  PaymentCardOption,
  PaymentCardOptionsContainer,
  PaymentDataContainer,
  PurchaseActionButton,
  SelectedProductsContainer,
  UserAddressCard,
  UserFormContainer,
} from './styles';
import { priceFormatter } from '../../utils/formatter';
import { api } from '../../lib/axios';

const purchaseFormSchema = zod.object({
  zip_code: zod.string().min(8).max(8),
  address: zod.string(),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string().min(2).max(2),
  paymentMethod: zod.enum(['credit', 'debit', 'money']),
});

export type PurchaseFormInputs = zod.infer<typeof purchaseFormSchema>;

export function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = useForm<PurchaseFormInputs>({
    resolver: zodResolver(purchaseFormSchema),
  });

  const [itemsTotal, setItemsTotal] = useState(() => {
    return Object.values(cartItems).reduce((accumulator, item) => {
      return accumulator + (item.product.price / 100) * item.quantity;
    }, 0);
  });

  const deliveryTotal = Number((itemsTotal * 0.118).toFixed(1));
  const itemsInCart = Object.values(cartItems);

  async function handleGetAddressByZipCode(zipCode: string) {
    try {
      const { data } = await api.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      );

      if (data.erro) {
        console.log('INVALID_CEP', data.erro);
      }

      const { logradouro, bairro, localidade, uf } = data;

      reset({
        address: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      });
    } catch (error) {
      console.log('GET_ADDRESS_BY_CEP_ERROR', error);
    }
  }

  const zipCode = watch('zip_code');
  if (zipCode && zipCode.length === 8) {
    handleGetAddressByZipCode(zipCode);
  }

  function handleBuyProduct(data: PurchaseFormInputs) {
    // TODO: Register payment in database
    navigate('/checkout/success', {
      state: data,
    });
    clearCart();
  }

  function handleNavigateToHome() {
    navigate('/');
  }

  useEffect(() => {
    const total = Object.values(cartItems).reduce((accumulator, item) => {
      return accumulator + (item.product.price / 100) * item.quantity;
    }, 0);
    setItemsTotal(total);
  }, [cartItems]);

  useEffect(() => {
    document.title = 'Coffee Delivery | Pagamento';
  }, []);

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleBuyProduct)}>
      <UserFormContainer>
        <h2>Complete seu pedido</h2>
        <UserAddressCard>
          <CardHeader>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardHeader>
          <div>
            <input
              type="text"
              required
              placeholder="CEP"
              minLength={8}
              maxLength={8}
              {...register('zip_code')}
            />
            <input
              type="text"
              required
              placeholder="Rua"
              disabled
              title="Esse campo é preenchido automaticamente após digitar o CEP"
              {...register('address')}
            />
            <input
              type="text"
              required
              placeholder="Número"
              {...register('number')}
            />
            <>
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <label htmlFor="complement">Opcional</label>
            </>
            <input
              type="text"
              required
              placeholder="Bairro"
              disabled
              title="Esse campo é preenchido automaticamente após digitar o CEP"
              {...register('neighborhood')}
            />
            <input
              type="text"
              required
              placeholder="Cidade"
              disabled
              title="Esse campo é preenchido automaticamente após digitar o CEP"
              {...register('city')}
            />
            <input
              type="text"
              required
              placeholder="UF"
              disabled
              title="Esse campo é preenchido automaticamente após digitar o CEP"
              minLength={2}
              maxLength={2}
              {...register('state')}
            />
          </div>
        </UserAddressCard>
        <PaymentCard>
          <CardHeader>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeader>
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <PaymentCardOptionsContainer
                name="paymentMethod"
                required
                onValueChange={field.onChange}
                value={field.value}
              >
                <PaymentCardOption value="credit">
                  <CreditCard size={16} />
                  Cartão de crédito
                </PaymentCardOption>
                <PaymentCardOption value="debit">
                  <Bank size={16} />
                  Cartão de débito
                </PaymentCardOption>
                <PaymentCardOption value="money">
                  <Money size={16} />
                  Dinheiro
                </PaymentCardOption>
              </PaymentCardOptionsContainer>
            )}
          />
        </PaymentCard>
      </UserFormContainer>
      <SelectedProductsContainer>
        <h2>Cafés selecionados</h2>
        <CheckoutCard>
          {itemsInCart.length > 0 ? (
            <>
              <CartProductListContainer>
                {itemsInCart.map(({ product }) => (
                  <div key={product.id}>
                    <CartItem data={product} />
                    <Divider />
                  </div>
                ))}
              </CartProductListContainer>
              <PaymentDataContainer>
                <div>
                  <p>Total de itens</p>
                  <span>{priceFormatter.format(itemsTotal)}</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>{priceFormatter.format(deliveryTotal)}</span>
                </div>
                <div>
                  <p>
                    <strong>Total</strong>
                  </p>
                  <span>
                    <strong>
                      {priceFormatter.format(itemsTotal + deliveryTotal)}
                    </strong>
                  </span>
                </div>
                <PurchaseActionButton disabled={isSubmitting}>
                  Confirmar pedido
                </PurchaseActionButton>
              </PaymentDataContainer>
            </>
          ) : (
            <EmptyCartContainer>
              <Coffee size={36} />
              <p>Seu carrinho de compras está vazio!</p>
              <PurchaseActionButton
                type="button"
                onClick={handleNavigateToHome}
              >
                Visualizar catálogo
              </PurchaseActionButton>
            </EmptyCartContainer>
          )}
        </CheckoutCard>
      </SelectedProductsContainer>
    </CheckoutContainer>
  );
}
