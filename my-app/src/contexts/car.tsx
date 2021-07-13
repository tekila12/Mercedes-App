import React, {useState, useEffect}from 'react'
import ICars from '../interface/car';
import axios from 'axios';
import api from '../api/api';


export const CarsContext=  React.createContext<Props>({
  setIsLoading: (value: boolean) => {},
  isLoading: false,
  cars:[],
  brands:[],
  handleSelectBrand: () =>{},
})


export type Props ={
  setIsLoading: (value: boolean) => void,
  isLoading: boolean,
  cars:object[],
  brands:object[],
  handleSelectBrand: (brand:object) => any
}
interface IProps {
  children: React.ReactNode;
}



declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

export const CarsProvider:React.FC <IProps> = ({ children }  ) => {

const [isLoading, setIsLoading] = useState(false);
const [cars, setCars] =useState<any | ICars[] >([])
const [brands, setBrands] = useState([])
const [currentSelectedBrand, setCurrentSelectedBrand] = useState('')   

const handleSelectBrand = React.useCallback((brand) => {
  return setCurrentSelectedBrand(cars[brand]);
},[cars])

useEffect(()=>{
  const fetchData = async () => {
    setIsLoading(true);
    const response = await api.get('/cars', {
    });  
    setIsLoading(false)
    setCars([...response.data]);
    const model=[];
    for (const brand in response){
      const booksWithCategory = response[brand].map((item: any) => ({
        ...item,
        brand,
      }))
     model.push(...booksWithCategory)
    
    }
    setCars(brands)
    console.log(response.data)
  };
   

    fetchData()
},[brands, cars])
   


const myContextValue= React.useMemo(()=>({
  cars, setIsLoading, 
  handleSelectBrand, brands, isLoading
}),[cars, setIsLoading, 
  handleSelectBrand, brands, isLoading])

  return (




   
    <CarsContext.Provider
      value={myContextValue}
    >
    <>
      {children}
      </>
    </CarsContext.Provider>
  );
}



