import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.style.scss";
import Button from "../../components/button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  //use async method because we are generating a user document inside of an external service
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      //use switch to check, default means if there is nothing fit above than do console.log(error)
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for emil");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
      /* if (error.code === "auth/wrong-password") {
        alert("incorrect password for emil");
      }else if(error.code === "auth/user-not-found"){
        alert("can't not find your email")
      }
      console.log(error); */
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);

    //put all the formFields and update the renewed name and value data
    setFormFields({ ...formFields, [name]: value });
  };

  //default of button is type submit so we need to set the google sign in button as type of text to avoid alert
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign IN</Button>
          <Button type="text" onClick={signInWithGoogle} buttonType="google">
            Google Sign IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
