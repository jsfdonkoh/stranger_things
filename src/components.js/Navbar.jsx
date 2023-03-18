// import React from "react";

//  const Navbar = () => {
//     return (
//         <h3> Navbar</h3>
//     )}

//  export default Navbar 

import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Register, Login } from '.';
import App, { token } from '../App';

export const NavBar = ({logout}) => {

    return (
        <>
        <div className='navigation'>
            <Link className='homeTab' to='/Header'>Home</Link>
            {/* <Link className='profileTab' to='/Profile'>Profile</Link> */}
            <Link className='registerTab' to='/Register'>Register</Link>
            <Link className='loginTab' to='/Login'>Login</Link>
            <Link className='logout' onClick={(event) => logout(event)}>Log Out</Link>
        </div>
            <Routes>
                
                    <Route path='/Home' element={<App/>}/>
                    {/* <Route path='/Profile' element={<Profile token={token} />}/> */}
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    
            </Routes>
         </>   
    )
};

export default NavBar;