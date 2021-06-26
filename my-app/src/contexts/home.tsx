import React,{useState} from "react";
import { useHistory } from "react-router-dom"
 const HomeContext =  React.createContext<Props>({
  modalIsOpenOne: false,
  modalIsOpenTwo: false,
  setIsModalOpenTwo: (value: boolean) => {},
  closeModalOne: () => {},
  closeModalTwo: () =>{},
  setIsModalOpenOne: (value: boolean) =>{},
  openModalTwo:() =>{},
  openModalOne: () =>{},
 })

export type Props ={
  setIsModalOpenTwo: (value: boolean) => void;
  closeModalOne: () => void;
  closeModalTwo: () => void;
  setIsModalOpenOne: (value: boolean) => void;
  modalIsOpenOne: boolean;
  openModalTwo: () => void;
  openModalOne:  ()=> void;
  modalIsOpenTwo: boolean;
}
interface IProps {
  children: React.ReactNode;
}
export const HomeProvider:React.FC<IProps> = ({ children }  ) => {

    const [modalIsOpenOne, setIsModalOpenOne] =useState(false)
    const [modalIsOpenTwo, setIsModalOpenTwo] =useState(false)


    const  closeModalOne=()=>{
        setIsModalOpenOne(false);
      }
      const  openModalOne=()=>{
        setIsModalOpenOne(true);
      }

      const  closeModalTwo=()=>{
        setIsModalOpenTwo(false);
      }
      const  openModalTwo=()=>{
        setIsModalOpenTwo(true);
      }
  
  return (

   
    <HomeContext.Provider
      value={{  modalIsOpenOne,
              modalIsOpenTwo,
              setIsModalOpenTwo,
              setIsModalOpenOne,
              closeModalOne,
              closeModalTwo, 
              openModalTwo,
              openModalOne}}
    >
    <>
      {children}
      </>
    </HomeContext.Provider>
  );
}

export { HomeContext  };
