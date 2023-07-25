import React from "react";
import Container from "react-bootstrap/Container";
import style from './Home.module.css';
import { useAppSelector } from "../../redux/store";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home () {
    const darkMode = useAppSelector(state => state.user.darkMode)

    const bodyClasses = darkMode ? style.containerDarkMode : ""

    const containerClasses  = darkMode 
        ? `${style.containerDarkMode} ${style.containerStyle}`
        : style.containerStyle 

    return (
        <div className={bodyClasses}>
            <Container className={containerClasses}>
                <h1>Home</h1>
                <SearchBar/>
            </Container>
        </div>
    )
};

export default Home;