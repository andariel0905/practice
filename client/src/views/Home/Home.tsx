import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import style from './Home.module.css';

function Home () {
    const [darkMode, setDarkMode] = useState(false);

    const bodyClasses = darkMode ? style.containerDarkMode : "";

    const containerClasses  = darkMode 
        ? `${style.containerDarkMode} ${style.containerStyle}`
        : style.containerStyle 

    return (
        <div className={bodyClasses}>
            <Container className={containerClasses}>
                <h1>Home</h1>
                <Button onClick={() => setDarkMode(!darkMode)}>Dark Mode</Button>
            </Container>
        </div>
    )
};

export default Home;