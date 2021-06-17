import React,{useState, useEffect, useContext, } from 'react'
import Modal from 'react-modal'
import logging from '../config/logging';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './Register.css'
import { HomeContext } from '../contexts/home';
import { Props } from '../contexts/home';



const Register: React.FunctionComponent<Props> =props => {
    const [authing, setAuthing] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm]= useState<string>('');
    const [error, setError] = useState<string>('');
    const [redirect, setRedirect] = useState<string>('');
    const {modalIsOpenOne, closeModalOne}= useContext(HomeContext)
    
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    const Register = async () => {
        // Do some error checking!
        if (password !== confirm)
        {
            setError('Passwords dont match!');
            return;
        }

        if (error !== '')
            setError('');

        setAuthing(true);

        try 
        {
            const response = await Axios({
                method: 'POST',
                url: 'http://localhost:7000/users/register',
                data: {
                    username,
                    password
                }
            });

            if (response.status === 201)
            {
                // Could also use history.push('/login')
                setRedirect('/login');
            }
            else
            {
                setError('Unable to register, please try again!');
                setAuthing(false);
            }
        } 
        catch (error) 
        {
            setError('Unable to register, please try again!');
            logging.error(error, 'Register');
            setAuthing(false);
        }
    }

    
    if (redirect !== '')
    {
        return <Redirect to={redirect} />;
    }

    return (
        <>
        <Modal 
         isOpen={modalIsOpenOne}
         onRequestClose={closeModalOne}
         style={customStyles}
         className="Modal"
         overlayClassName="Overlay">
        <div className='Register'>
            <form className='Register__container' onSubmit={Register}>
             <label className='Label__content'>Username</label>
              <input
                    className='Input__wrapper'
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter name ..."
                    onChange={event => setUsername(event.target.value)}
                    value={username}
                />

             <label className='Label__content'>Password</label>              
                  <input
                    className='Input__wrapper'
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password ..."
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
             <label className='Label__content'>Confirm password</label>              
                <input
                    className='Input__wrapper'
                    type="password"
                    name="confirm"
                    id="confirm"
                    placeholder="Confirm password ..."
                    onChange={event => setConfirm(event.target.value)}
                    value={confirm}
                    
                />

             <button
                disabled={authing}
                className='Register__button'            
                onClick={Register}
            >
                Register!
            </button>
            <small>
                <p className="Account__exist">
                    Already have an account? <Link to="/login">Login.</Link>
                </p>
            </small>
            {error !== '' && <small className="Text__danger">{error}</small>}
           </form>
        </div>
        </Modal>
        </>
    )
}

export default Register
