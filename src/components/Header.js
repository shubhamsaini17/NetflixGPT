import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleLogOut = function () {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen pl-12 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-1/6"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user ? // don't show sign out button/profile image in home page
      (<div className="flex pr-4 justify-center items-center">
        <img
          className="w-12 h-12 p-2"
          src={(user?.photoURL)? user?.photoURL : "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" }
          alt="User Icon"
        />
        <button className="font-bold text-white" onClick={handleLogOut}>
          (Sign Out)
        </button>
      </div>) : null
      }
    </div>
  );
};

export default Header;
