// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//doc is for getting a document instance
//getDoc and setDoc are for getting and setting the document data
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC-0EvgT_tjSEyE4xw1Mg8UdN0XiHenWY",
  authDomain: "crwn-clothing-db-9bc52.firebaseapp.com",
  projectId: "crwn-clothing-db-9bc52",
  storageBucket: "crwn-clothing-db-9bc52.appspot.com",
  messagingSenderId: "656769378436",
  appId: "1:656769378436:web:67f39243cc3abbfb677ad1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Create an instance of the Google provider object:
//new word means you can have more than one provider(in this case is google provider)
const googleProvider = new GoogleAuthProvider();

//force users to select a account
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//there is no "new" word it's because you only can have one auth
//Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();

//adding to an external source so needs to use async/await
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  //fire off
  await batch.commit();
  console.log("done");
};

//making a retrieval form the firebase so needs to use async/await 
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

//doc takes three parameter(db, collections, (identifier)unique id)
//generate the db
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "user", userAuth.uid);
  //there is no data inside yet, but google would make a document reference for us to store the data
  //in these case if we set the data later, google would place our data inside of the "user/uid"
  //console.log(userDocRef);

  //check if the data do exist
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  //console.log(userSnapshot.exists()); //false

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //if there is no data of displayName, additionalInformation would help to fill up.
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //if it exists
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

//whenever the auth change(sign in  and sign out) then will call the callback
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
//https://firebase.google.com/docs/auth/web/google-signin(Firebase-doc)
