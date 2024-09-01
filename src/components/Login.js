import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data email, password if not valid give error message in message varible
    const message = checkValidData(email.current.value, password.current.value); // if not valid give error msg
    setErrorMessage(message);

    if (message) return; // if error do not use firebase for sign /sign up.

    // do Sign in / Sign Up using firebase
    //sign / Sign Up

    if (!isSignInForm) {
      // sign up - new user

      // const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser; // update user auth.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in/ login  - logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-screen">
        <img className="w-screen h-screen" src={BG_IMG} alt="backgound" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-10 w-3/12 absolute bg-black my-28 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-md"
      >
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-gray-900 text-gray-500 border bg-opacity-0 border-white"
          />
        )}
        <input
          ref={email} // reference to useRef hook => give object and value of input box
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-2 w-full rounded-md bg-gray-900 bg-opacity-0 border border-white text-gray-500"
        />
        <input
          ref={password} // reference to useRef hook => give object and value of input box
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-900 text-gray-500 border bg-opacity-0 border-white"
        />
        <p className="text-sm text-red-600 font-bold p-1">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
