import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../api/api';
import ICars from '../interface/car';

const Cars = () => {

const [isLoading, setIsLoading] = useState(false);
const [cars, setCars] =useState<ICars[]>([])
const [isError, setIsError] = useState(false);

    
useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true);
      const response = await api.get('/cars', {
      });  
      setIsLoading(false)
      setCars(response.data);
      console.log(response.data)
    };
     
  
      fetchData()
  },[])
    return (
        <div>
            Cars
        </div>
    )
}

export default Cars
