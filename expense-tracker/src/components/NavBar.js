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
    <nav className="alert alert-secondary p-3 d-flex align-items-center justify-content-center">
      {user ? (
        <button onClick={signOut} class="btn btn-success" type="button">
          Sign Out
        </button>
      ) : (
        <button className="btn btn-primary" onClick={signIn}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default NavBar;
