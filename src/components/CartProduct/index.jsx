import { Button, Info, ProductCard } from "./styles";

const CartProduct = ({ product, currentSale, setCurrentSale }) => {
  const handleClick = () => {
    const filteredProducts = currentSale.filter(
      (currentProduct) => currentProduct.id !== product.id
    );

    setCurrentSale(filteredProducts);
  };

  return (
    <ProductCard>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <Info>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
      </Info>
      <Button onClick={handleClick}>Remover</Button>
    </ProductCard>
  );
};

export default CartProduct;
