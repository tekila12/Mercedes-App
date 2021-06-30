import React from "react";
import { useContext } from "react";
import { CarsContext } from "../contexts/car";
import CarsDetails from "./CarsDetails";

const Cars = () => {
  const { cars, handleSelectBrand } = useContext(CarsContext);

  return (
    <div>
      {Object.keys(cars[0]).map((key: any, index) => {
        let brand: any = cars[key];
        return key;  
        /*
        return (
          <div
            key={key}
            onClick={() => handleSelectBrand(key)}
            className="brand__list"
          >
            {brand[0].brand}
            <img src={brand[0].main_image} alt="" />
          </div>
        )
        */
      })}

      <CarsDetails />
    </div>
  );
};

export default Cars;
