import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(false);

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logOut = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                const {email,photoURL,displayName,uid} = user
                setUser({email,photoURL,displayName,uid})
            }else{
                setUser(null)
            }
        })

        return () => unsubscribe()
    }, [])


    return (
        <UserContext.Provider value={{ user, signUp, signIn, logOut }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;