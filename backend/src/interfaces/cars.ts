

export default interface ICars  {
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
    power:string  ;
    power_per_litre:string;
    torque:string;
    fuel_system:string;
}

interface Volume {
    max_weights:string;
    fuel_tank:string;
}


interface Performance {
    acceleration:string;
    maximum_speed:string;
    fuel_urban:string;
    fuel_extra_urban:string;
    fuel_combined:string ;
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