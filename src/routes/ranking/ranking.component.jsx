import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { CartContext } from "../../contexts/cart.context";
import Button from "../../components/button/button.component";
import "./ranking.component.scss";

const Ranking = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomProducts = () => {
      const allProducts = Object.values(categoriesMap).flat();
      const randomProducts = getRandomItems(allProducts, 10);
      setRandomProducts(randomProducts);
    };

    getRandomProducts();
  }, [categoriesMap]);

  // Helper function to get random items from an array
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="ranking-container">
      {randomProducts.map((product, index) => (
        <PopularCard key={product.id} product={product} rank={index + 1} />
      ))}
    </div>
  );
};


const PopularCard = ({ product, rank }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imageUrl, name, price } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card">
      <div className="product-rank">{rank}</div>
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{`Price: $${price}`}</p>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};



export default Ranking;
