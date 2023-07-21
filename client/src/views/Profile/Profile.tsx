import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import style from './Profile.module.css';

function Profile () {
    const [darkMode, setDarkMode] = useState(false);

    const bodyClasses = darkMode ? style.containerDarkMode : "";

    const containerClasses  = darkMode 
        ? `${style.containerDarkMode} ${style.containerStyle}`
        : style.containerStyle 

    return (
        <div className={bodyClasses}>
            <Container className={containerClasses}>
                <h1>Profile</h1>
                <Button onClick={() => setDarkMode(!darkMode)}>Dark Mode</Button>
            </Container>
        </div>  
    )
};

export default Profile;