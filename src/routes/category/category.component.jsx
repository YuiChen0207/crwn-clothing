import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/products-card/product-card.component";
import "./category.component.scss";

//useParams will give us an object that matches the parameters
//use useEffect and useState to avoid unnecessary rendering , but also can just write(const products = categoriesMap[category])
//When first time mount categoriesMap might be empty so need to say products && .....(if products have value and then...)
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-product-outside-container">
      <h2>
        <span className="title">{category.toLocaleUpperCase()}</span>
      </h2>
      <div className="category-product-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
