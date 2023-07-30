import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import style from './Register.module.css';
import { User } from '../../types';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { registerUser } from "../../redux/features/userSlice";
import { Form } from "react-bootstrap";

interface FormState {
    inputValues: User
}

function Register () {
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(state => state.user.darkMode)

    const bodyClasses = darkMode ? style.containerDarkMode : ""
    
    const containerClasses  = darkMode 
        ? `${style.containerDarkMode} ${style.containerStyle}`
        : style.containerStyle 
    

    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        name: '',
        password: '',
        email: ''
    });

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        dispatch(registerUser(inputValues))
        setInputValues({
            name: '',
            password: '',
            email: ''
        })
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        })
    };
    return (
        <div className={bodyClasses}>
            <Container className={containerClasses}>
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={inputValues.name} type="text" name="name" placeholder="name"/>
                    <input onChange={handleChange} value={inputValues.email} type="text" name="email" placeholder="email"/>
                    <input onChange={handleChange} value={inputValues.password} type="text" name="password" placeholder="password"/>
                    <Button type="submit">Register</Button>
                </Form>
            </Container>
        </div>
    )
};

export default Register;