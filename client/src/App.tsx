import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login'
import NavBarComponent from './components/NavBar/NavBar';
import Profile from './views/Profile/Profile';
import Footer from './components/Footer/Footer';
import { useAppDispatch } from './redux/store';
import { fetchUsuarios } from './redux/features/userSlice';
import Register from './views/Register/Register';

function App() {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchUsuarios())
    }, [])

    return (
        <>
            <NavBarComponent/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
            <Footer/>
        </>
    )
};

export default App;