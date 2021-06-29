import React, { useEffect, useContext } from 'react';
import Cars from '../components/Cars';
import Search from '../components/Search';



const Home: React.FunctionComponent = props => {
    

    return (
       <div>
                <Search />  
                <Cars />
       </div>
    );
}

export default Home;