import React from 'react';
import { auth } from '../lib/firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {
  const [user] = useAuthState(auth);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  // const signOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       setUser(null);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  
  return (
    <nav className="">
      {user ? (
        <button onClick={signOut} className="signOut" type="button">
          Sign Out
        </button>
      ) : (
        <button className="signIn" onClick={signIn}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default NavBar;
