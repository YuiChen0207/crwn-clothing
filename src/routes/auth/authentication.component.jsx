/* import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react"; */
import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import "./authentication.component.style.scss"

/* import {
  //getRedirectResult is going to get auth
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"; */

//when you make a call to database, always use async await
//use "useEffect" when redirected to the original page it can be mounted again
//use IIFE
//it will get response of null first (because it hasn't redirect yet,), and then when you press the button will get the response of user data.

const Authentication = () => {
  /* useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      //if response is not null
      if (response) {
        const { userDocRef } = await createUserDocumentFromAuth(response.user);
        console.log(response.user);
      }
    })();
  }, []); */


  return (
    <div>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
