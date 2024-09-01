import React,{useEffect} from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleLogOut = function () {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    // authentication
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // firebase API - used here to update our store to store user object
      if (user) {
        // when User is signed in/ or registed first time it automatically called so we use it to update our redux store to store user object
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out- remove user from redux store
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component will unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className="absolute w-screen pl-12 bg-gradient-to-b from-black z-10 flex justify-between z-50">
      <img
        className="w-[200px]"
        src={LOGO}
        alt="logo"
      />

      {user && // don't show sign out button/profile image in home page
      (<div className="flex pr-8 justify-center items-center">
        <img
          className="w-8 h-8 rounded-sm mr-2"
          src={(user?.photoURL)? user?.photoURL : "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" }
          alt="User Icon"
        />
        <button className="font-bold text-white" onClick={handleLogOut}>
          (Sign Out)
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
