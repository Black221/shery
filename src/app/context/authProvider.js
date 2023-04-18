import React, {createContext, useContext, useState} from "react";

const StateContext = createContext(undefined);


export const AuthContextProvider = ({ children}) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const onLogin = (user, token) => {
        setUser(user);
        window.localStorage.setItem("user", user);
        window.localStorage.setItem("token", token);
    }

    const onLogout = () => {
        setUser(null);
        window.localStorage.clear();
    }

    return (
        <StateContext.Provider value={{
            user, onLogout, onLogin,
            token, setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useAuthStateContext = () => useContext(StateContext)