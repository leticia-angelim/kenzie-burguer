import { Button, Total } from "./styles";

const CartTotal = ({ cartTotal, setCurrentSale }) => {
  const removeAllProducts = () => {
    setCurrentSale([]);
  };

  return (
    <Total>
      <div>
        <p>Total</p>
        <span>R$ {cartTotal.toFixed(2)}</span>
      </div>
      <Button
        onClick={() => {
          removeAllProducts();
        }}
      >
        Remover todos
      </Button>
    </Total>
  );
};

export default CartTotal;
