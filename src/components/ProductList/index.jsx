import Product from "../Product";
import { CardList } from "./styles";

const ProductList = ({ products, handleClick }) => {
  return (
    <CardList>
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </CardList>
  );
};

export default ProductList;
