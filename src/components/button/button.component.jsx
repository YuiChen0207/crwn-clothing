import "./button.style.scss"

//create 3 different class of button to make buttons
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted ",
};

//for default button, className would be button-container undefined"  
//...otherProps(undefined) would be other props, for example:type="submit"
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
