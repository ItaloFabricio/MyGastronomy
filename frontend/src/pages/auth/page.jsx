import { useState } from "react";

export default function Auth () {
    const [formType, setFormType] = useState('login');

    const handleChangeFormType = () => {
        if(formType === 'login') {
            setFormType('signup')
        } else {
            setFormType('login')
        }
    }

    if(formType === 'login') {
        return (
            <>
                <h1>Login</h1>
                <button onClick={handleChangeFormType}>Don't you have an account ? Click here</button>
            </>
        )
    }

    if(formType === 'signup') {
        return (
            <>
                <h1>Signup</h1>
                <button onClick={handleChangeFormType}>Already have an account ? Click here</button>
            </>
        )
    }
    
}