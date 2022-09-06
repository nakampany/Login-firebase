import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home()  {
    const [user] = useAuthState(auth);

    return (
    <>
        {user ? (
            <>
                <UserInfo/>
                <SignOutButton/>
            </> ) : (
            <SignInButton/> )}
    </>
    );
}

export default Home;

function SignInButton (){
    const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
    };
    return (
        <button type="" onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    );
}

function UserInfo (){
        return (
            <div className="userInfo">
            <img src={auth.currentUser.photoURL}></img>
            <p>{auth.currentUser.displayName}</p>
            </div>
        );
    }


function SignOutButton (){
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    );
}

