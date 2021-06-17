    import React, { useContext, useEffect, useState } from 'react';
import logging from '../config/logging';
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import UserContext from '../contexts/user';
import { HomeContext } from '../contexts/home';
import Modal from 'react-modal'

const SignIn: React.FunctionComponent = props => {
    const [authing, setAuthing] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [redirect, setRedirect] = useState<string>('');
    const {modalIsOpenTwo, closeModalTwo}= useContext(HomeContext)
    const userContext = useContext(UserContext);

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
    

    const Login = async () => {
        if (error !== '')
            setError('');

        setAuthing(true);

        try 
        {
            const response = await Axios({
                method: 'POST',
                url: 'http://localhost:7000/users/login',
                data: {
                    username,
                password
                }
            });

            if (response.status === 200 || response.status === 304)
            {
                userContext.Login(response.data.user, response.data.token);
                setRedirect('/');
            }
            else
            {
                setError('Unable to sign in, please try again!');
                setAuthing(false);
            }
        } 
        catch (error) 
        {
            setError('Unable to sign in, please try again!');
            logging.error(error, 'Login');
            setAuthing(false);
        }
    }

    if (redirect !== '')
    {
        return <Redirect to={redirect} />;
    }

    return (
        <Modal 
        isOpen={modalIsOpenTwo}
        onRequestClose={closeModalTwo}
        style={customStyles}
        className="Modal"
        overlayClassName="Overlay">
       <div className='Register'>
       <form className='Register__container' onSubmit={Login}>  
           <label className='Label__content'>Username</label>  
           <input   className='Input__wrapper'
                type="username"
                name="username"
                id="username"
                placeholder="Enter username ..." 
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
            <button
                disabled={authing}                           
                onClick={Login}
                className='Register__button'
            >
                Login
            </button>
            <small>
                <p className="Account__exist">
                    Don't have an account? <Link to="/register">Register.</Link>
                </p>
            </small>
            {error !== '' && <small className="Text__danger">{error}</small>}
           </form>
       </div>
       </Modal>
    )
}

export default SignIn
