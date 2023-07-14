import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login'
import NavBarComponent from './components/NavBar/NavBar';
import Profile from './views/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <NavBarComponent/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
            <Footer/>
        </>
    )
};

export default App;