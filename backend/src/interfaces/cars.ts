import { Document } from 'mongoose';

export default interface ICars extends Document {
   a_class: BrandList[],
}


interface BrandList {
 brand: string;
 id:number;
 year:number;
 main_image: string;
 price:number;
 transmission:string;
 fuel_type:string;
 seating_capacity:number;
 engine:number;
 engine_specs:Specs;
 volume_weights:Volume;
 performance: Performance;
 images_interior: Interior;
 images_exterior: Exterior;
}

interface Specs {
    power:number;
    power_per_litre:number;
    torque:number;
    fuel_system:number;
}

interface Volume {
    max_weights:number;
    fuel_tank:number;
}


interface Performance {
    acceleration:number;
    maximum_speed:number;
    fuel_urban:number;
    fuel_extra_urban:number;
    fuel_combined:number;
}

interface Interior {
    image_one:string;
    image_two:string;
    image_three:string;
    image_four:string;
}

interface Exterior {
    image_one:string;
    image_two:string;
    image_three:string;
    image_four:string;
}