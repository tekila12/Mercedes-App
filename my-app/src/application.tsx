import axios from 'axios';
import Promise from "ts-promise";
import React, { useEffect,  useState, Suspense } from 'react';
import { Route,  BrowserRouter as Router, Switch, RouteComponentProps, useHistory } from 'react-router-dom';
import Header from './components/Header'
import logging from './config/logging';
import { UserContextProvider } from './contexts/user';
import IUser from './interface/user';
import Home from './pages/Home';
import './App.css'
import LoaderOne from './Loaders/LoaderOne';


const Register = React.lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 1100));
    return import('./pages/Register');
  });
  const SignIn = React.lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 1100));
    return import('./pages/SignIn');
  });

const Application: React.FunctionComponent<{}> = props => {
    /** Application State Values */
    const [user, setUser] = useState<IUser|null>(null);
    const [token, setToken] = useState<string|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    const history = useHistory();

    useEffect(() => {
        logging.info('Loading application.');

        if (user === null || token === null)
        {
            logging.info('Not logged in in current session, checking localstorage', 'Auth');

            let _token = localStorage.getItem('token');
            let _user = localStorage.getItem('user');

            if (_user === null || _token === null)
            {
                logging.info('Nothing in localstorage, removing vars and redirecting');
                Logout()
                history.push('/');
                setLoading(false);
            }
            else
            {
                logging.info('Credentials found, verifying.', 'Auth');
                VerifyLocalStorageCredentials(_token, _user);
            }
        }
        // eslint-disable-next-line
    }, []);

    const VerifyLocalStorageCredentials = async (_token: string, _user: string) => {
        try 
        {
            logging.info(_user)
            let _parsedUser = JSON.parse(_user);
            
            let response = await axios({
                method: 'GET',
                url: 'http://localhost:7000/users/validate',
                headers: {
                    Authorization: `Bearer ${_token}`
                }
            });

            if (response.status === 200 || response.status === 304)
            {
                Login(_parsedUser, _token);
                setLoading(false);
            }
            else
            {
                logging.info('Credentials no longer valid', 'Auth');
                Logout();
                history.push('/');
                setLoading(false);
            }
        } 
        catch (error) 
        {
            logging.error(error, 'Auth')   
            Logout();
            history.push('/');
            setLoading(false);
        }
    }

    const Login = (_user: IUser, _token: string) => {
        setUser(_user);
        setToken(_token);
        localStorage.setItem('user', JSON.stringify(_user));
        localStorage.setItem('token', _token);
    }

    const Logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/')
        setUser(null);
        setToken(null);
    }

    if (loading)
    {
        return <div>Loading .. </div>
    }

    let userContextValue = {
        user,
        token,
        Login,
        Logout
    }


  


    return (
        <div>
               
                <UserContextProvider value={userContextValue}>            
              
                <Router>               
                  <Header />   
                     <Suspense fallback={<LoaderOne/>}>                     
                   <Route path ='/Login' component={SignIn} />
                   <Route path ='/Register' component={Register} />
                    <Switch>
                    <Route path ='/' component={Home} />            
                    </Switch>
                   </Suspense>
                  </Router>
                 
                </UserContextProvider>
               
        </div>
    );
}

export default Application;
