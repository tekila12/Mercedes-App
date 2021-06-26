import React, {useState, useEffect}from 'react'
import api from '../api/api';
import ICars from '../interface/car';

const CarsContext=  React.createContext(null)

export const CarsProvider:React.FC = ({ children }  ) => {

const [isLoading, setIsLoading] = useState(false);
const [cars, setCars] =useState<ICars[]>([])
const fetchData = async () => {
  const response = await fetch('http://localhost:7000/cars')
  const result = await response.json()
  setCars(result)
  console.log(result)

  }
 

useEffect(() => {
  fetchData()
}, [])

  return (

   
    <CarsContext.Provider
      value={null}
    >
    <>
      {children}
      </>
    </CarsContext.Provider>
  );
}

export { CarsContext  };

function result(result: any) {
  throw new Error('Function not implemented.');
}
