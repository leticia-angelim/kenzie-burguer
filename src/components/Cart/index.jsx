import { useEffect } from "react";

import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

import {
  CartContainer,
  CartTitle,
  EmptyCart,
  List,
  Separation,
} from "./styles";

const Cart = ({ currentSale, setCurrentSale, cartTotal, setCartTotal }) => {
  const calculateTotal = () => {
    const prices = currentSale.reduce((acc, product) => acc + product.price, 0);

    setCartTotal(prices);
  };

  useEffect(calculateTotal, [currentSale, setCartTotal]);

  return currentSale.length > 0 ? (
    <CartContainer>
      <CartTitle>Carrinho de compras</CartTitle>
      <List>
        {currentSale.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        ))}
        <Separation />
      </List>
      <CartTotal cartTotal={cartTotal} setCurrentSale={setCurrentSale} />
    </CartContainer>
  ) : (
    <CartContainer>
      <CartTitle>Carrinho de compras</CartTitle>
      <EmptyCart>
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </EmptyCart>
    </CartContainer>
  );
};

export default Cart;
