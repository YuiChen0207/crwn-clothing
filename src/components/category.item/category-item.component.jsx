import "./category-item.styles.scss";

//received the entire object 
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        //use string variable inside of another string
        style={{backgroundImage: `url(${imageUrl})`, }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
