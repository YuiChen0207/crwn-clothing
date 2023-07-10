import { useNavigate } from "react-router-dom";
import ProductCard from "../products-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/shop/${title.toLowerCase()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isFirstElement = title === "hats";

  return (
    <div
      className={`category-preview-container ${
        isFirstElement ? "first-element" : ""
      }`}
      key={title}
    >
      <h2>
        <span className="title" onClick={handleCategoryClick}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          //only return the array that index smaller then 4
          //_ (product) ignore
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
