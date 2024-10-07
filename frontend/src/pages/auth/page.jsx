import { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./page.module.css";

export default function Auth () {
    const [formType, setFormType] = useState('login');
    const [formData, setFormData] = useState(null);

    const handleChangeFormType = () => {
        if(formType === 'login') {
            setFormType('signup')
        } else {
            setFormType('login')
        }
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    if(formType === 'login') {
        return (
            <div className={styles.authPageContainer}>
                <h1>Login</h1>
                <button onClick={handleChangeFormType}>Don't you have an account ? Click here</button>
                <form onSubmit={handleSubmitForm}>
                    <TextField
                        required
                        label='Email'
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                    />

                    <TextField
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>
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