import { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./page.module.css";
import authService from "../services/auth";

export default function Auth () {
    const [formType, setFormType] = useState('login');
    const [formData, setFormData] = useState(null);
    const { login } = authService();

    const handleChangeFormType = () => {
        setFormData(null)
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
        e.preventDefault();
        console.log(formData)

        switch (formType) {
            case 'login':
                login(formData)
                break
            case 'signup':
                if(formData.password !== formData.confirmPassword) {
                    console.log('Password do not match')
                }
            break
        }
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
            <div className={styles.authPageContainer}>
            <h1>Signup</h1>
            <button onClick={handleChangeFormType}>Don't you have an account ? Click here</button>
            <form onSubmit={handleSubmitForm}>
                <TextField
                    required
                    label='Nome'
                    type="fullname"
                    name="fullname"
                    onChange={handleFormDataChange}
                />

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
                
                <TextField
                    required
                    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleFormDataChange}
                />
                <Button type="submit">Signup</Button>
            </form>
        </div>
        )
    }
    
}