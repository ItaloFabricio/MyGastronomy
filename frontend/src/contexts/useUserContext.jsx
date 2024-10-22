import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storeAuthData = JSON.parse(localStorage.getItem('auth'));
        setUser(storeAuthData);
    }, [])

    const login = (newAuthData) => {
        setUser(newAuthData);
        localStorage.setItem('auth', JSON.stringify(newAuthData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth');
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    if(!context) {
        console.log('You are out of CartContext')
    }

    return context;
}