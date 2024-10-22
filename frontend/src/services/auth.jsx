import { useState } from "react";
import { useUserContext } from "../contexts/useUserContext";

export default function authService() {
    //elemento de carregamento da pagina
    const [authLoading, setAuthLoading] = useState(false);
    const { setUser } =  useUserContext();

    const url = 'http://localhost:3000/auth';

    const login = (formData) => {
        setAuthLoading(true);
        
        fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            if(result.success && result.body.token) {
                const authData = { token: result.body.token, user: result.body.user };

                // Salva no localStorage
                localStorage.setItem('auth', JSON.stringify(authData));

                // Atualiza o contexto com o usuário logado
                setUser(authData);
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setAuthLoading(false)
        })
    }

    const logout = () => {
        localStorage.removeItem('auth');
    }

    const signup = (formData) => {
        setAuthLoading(true);
        
        fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            if(result.success && result.body.token) {
                const authData = { token: result.body.token, user: result.body.user };

                // Salva no localStorage
                localStorage.setItem('auth', JSON.stringify(authData));

                // Atualiza o contexto com o usuário logado
                setUser(authData);


            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setAuthLoading(false)
        })
        
    }


    return { signup, login, logout, authLoading }
}