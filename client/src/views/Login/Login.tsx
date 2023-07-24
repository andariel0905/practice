import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import style from './Login.module.css';
import { User } from '../../types';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { postUsuario } from "../../redux/features/userSlice";
import List from "../../components/List/List";
import { Form } from "react-bootstrap";

interface FormState {
    inputValues: User
}

function Login () {
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
        dispatch(postUsuario(inputValues))
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
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={inputValues.email} type="text" name="email" placeholder="email"/>
                    <input onChange={handleChange} value={inputValues.name} type="text" name="name" placeholder="name"/>
                    <input onChange={handleChange} value={inputValues.password} type="text" name="password" placeholder="password"/>
                    <Button type="submit">Log in</Button>
                </Form>
                <List/>
            </Container>
        </div>
    )
};

export default Login;