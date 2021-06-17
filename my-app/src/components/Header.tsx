import React,{useContext, useState}from 'react'
import UserContext from '../contexts/user';
import { Link } from 'react-router-dom';
import './Home.css'
import Search from './Search';
import DarkMode from '../Theme/DarkMode';
import Modal from 'react-modal'
import { HomeContext } from '../contexts/home';
const Header:React.FC = () => {
    const {Logout, user, } = useContext(UserContext);
    const {openModalOne, openModalTwo } =useContext(HomeContext)

    return (
        <div className='Header__Container'>  
            <img className='logo' src='./images/car11.png' alt='first Car'/>
            <div className='Right__header'>
            <DarkMode />         
            {user ? (
              <button className='Logout' onClick={Logout}> Logout </button>
               ):( <div className='Link__header'>            
              <Link className="Register__Links" onClick={openModalOne} to='/Register'> Register</Link>
              <Link   onClick={openModalTwo} to='/Login'> Login </Link>
              </div>
              )}
            </div>                 
        </div>
    )
}

export default Header
