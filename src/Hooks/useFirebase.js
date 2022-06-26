import { useState } from "react";
import initializeFirebase from "../Components/Firebase/Firebase.init";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//initialize firebase aapp
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");

  // const location = useLocation();
  // const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // for register user : new users
  const registerUser = (email, password, location, name, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };

        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        //  navigate("/home")
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      });
    // navigate("/home")
  };
  // for logout
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  //login user -- existing user login
  const loginUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  // login with gooogle
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  // special observer
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);
  return { user, signInWithGoogle, registerUser, logOut, loginUser, authError };
};
export default useFirebase;
