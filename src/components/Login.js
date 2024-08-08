import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
          alt="backgound"
        />
      </div>
      <form className="p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-md">
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full rounded-md bg-gray-900 text-gray-500 border bg-opacity-0 border-white" 
        />
        }
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full rounded-md bg-gray-900 bg-opacity-0 border border-white text-gray-500"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-gray-900 text-gray-500 border bg-opacity-0 border-white"
        />
        <button className="p-2 my-6 bg-red-600 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
