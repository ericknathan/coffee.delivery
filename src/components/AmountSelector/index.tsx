import { Minus, Plus } from 'phosphor-react';
import { AmountSelectorContainer } from './styles';

interface AmountSelectorProps {
  quantity: number;
  onChange: (fn: (currentQuantity: number) => number) => void;
}

export function AmountSelector({ quantity, onChange }: AmountSelectorProps) {
  const removeItemFromCartInputIsValid = quantity > 1;
  const addItemFromCartInputIsValid = quantity < 10;

  function handleDecrementProductQuantity() {
    if (removeItemFromCartInputIsValid) {
      onChange((currentQuantity: number) => currentQuantity - 1);
    }
  }

  function handleIncrementProductQuantity() {
    if (addItemFromCartInputIsValid) {
      onChange((currentQuantity) => currentQuantity + 1);
    }
  }

  return (
    <AmountSelectorContainer>
      <button
        type="button"
        disabled={!removeItemFromCartInputIsValid}
        title="Remover unidade do carrinho"
        onClick={handleDecrementProductQuantity}
      >
        <Minus weight="bold" size={14} />
      </button>
      <span title={`${quantity} unidade(s) selecionada(s)`}>{quantity}</span>
      <button
        type="button"
        disabled={!addItemFromCartInputIsValid}
        title="Adicionar unidade ao carrinho"
        onClick={handleIncrementProductQuantity}
      >
        <Plus weight="bold" size={14} />
      </button>
    </AmountSelectorContainer>
  );
}
