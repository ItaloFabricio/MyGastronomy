import { useState } from "react";

export default function authService() {
    //elemento de carregamento da pagina
    const [authLoading, setAuthLoading] = useState(false);

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
        .then((response) => response.json)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setAuthLoading(false)
        })
    }

    const logout = () => {
        
    }

    const signup = (formData) => {
        
    }

    return { signup, login, logout, authLoading }
}