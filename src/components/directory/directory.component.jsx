import "./directory.style.scss";
import CategoryItem from "../category.item/category-item.component";

//received the entire object 
const directory = ({categories}) => {
  
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default directory;