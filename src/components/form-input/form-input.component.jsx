import "./form-input.component.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    //input should put above label, because of the &:focus ~ .form-input-label
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
