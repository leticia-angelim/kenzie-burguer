import { useEffect, useState } from "react";
import api from "./services/api";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

import GlobalStyle from "./styles/global";
import { Main } from "./styles/styles";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const showProducts = (inputValue) => {
    const result = products.filter(
      (product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        product.category.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredProducts(result);
  };

  const handleClick = (productId) => {
    const equals = currentSale.some((product) => product.id === productId);

    if (!equals) {
      const result = products.find((product) => product.id === productId);
      setCurrentSale([...currentSale, result]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header showProducts={showProducts} />
      <Main>
        <ProductList
          products={filteredProducts.length > 0 ? filteredProducts : products}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </Main>
    </>
  );
}

export default App;
