import React from 'react';
import Container from "react-bootstrap/Container";
import style from './Profile.module.css';
import { useAppSelector } from '../../redux/store';

function Profile () {
    const darkMode = useAppSelector(state => state.user.darkMode)

    const bodyClasses = darkMode ? style.containerDarkMode : "";

    const containerClasses  = darkMode 
        ? `${style.containerDarkMode} ${style.containerStyle}`
        : style.containerStyle 

    return (
        <div className={bodyClasses}>
            <Container className={containerClasses}>
                <h1>Profile</h1>
            </Container>
        </div>  
    )
};

export default Profile;