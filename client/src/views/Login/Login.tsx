import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import style from './Login.module.css';

function Login () {
    const [darkMode, setDarkMode] = useState(false);

    const bodyClasses = darkMode ? style.containerDarkMode : "";
    
    const containerClasses  = darkMode 
        ? `${style.containerDarkMode} ${style.containerStyle}`
        : style.containerStyle 

    return (
        <div className={bodyClasses}>
            <Container className={containerClasses}>
                <h1>Login</h1>
                <Button onClick={() => setDarkMode(!darkMode)}>Dark Mode</Button>
            </Container>
        </div>
    )
};

export default Login;