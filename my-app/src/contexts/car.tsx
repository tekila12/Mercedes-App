import React, {useState, useEffect}from 'react'
import ICars from '../interface/car';
import axios from 'axios';
import api from '../api/api';

export const CarsContext=  React.createContext({})





export const CarsProvider:React.FC = ({ children }  ) => {

const [isLoading, setIsLoading] = useState(false);
const [cars, setCars] =useState<ICars[]>([])
const [isError, setIsError] = useState(false);
    
useEffect(()=>{
  const fetchData = async () => {
    setIsLoading(true);
    const response = await api.get('/cars', {
    });  
    setIsLoading(false)
    setCars([...response.data]);
    console.log(response.data)
  };
   

    fetchData()
},[])

   




  return (

   
    <CarsContext.Provider
      value={{cars}}
    >
    <>
      {children}
      </>
    </CarsContext.Provider>
  );
}



