import { Button, Card, Frame, Info } from "./style";

const Product = ({ product, handleClick }) => {
  return (
    <Card>
      <Frame>
        <img src={product.img} alt={product.name} />
      </Frame>
      <Info>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <strong>R$ {product.price.toFixed(2)}</strong>
        <Button
          onClick={() => {
            handleClick(product.id);
          }}
        >
          Adicionar
        </Button>
      </Info>
    </Card>
  );
};

export default Product;
