import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "../../routes/shop/shop.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  //Object.keys(categoriesMap) can get the key of object and return a string of array ["hats", jackets, .....]
  //categoriesMap is an object, use object[key] to map the products(double map)
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
