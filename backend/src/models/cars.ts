import mongoose, { Schema } from 'mongoose';

import ICars from '../interfaces/cars'
const Exterior = new Schema({
    image_one:{type:Number},
    image_two:{type:Number},
    image_three:{type:Number},
    image_four:{type:Number},
})

const Interior = new Schema ({
    image_one:{type:Number},
    image_two:{type:Number},
    image_three:{type:Number},
    image_four:{type:Number},
})

const Performance = new Schema({
    acceleration:{type:Number },
    maximum_speed:{type:Number},
    fuel_urban:{type:Number},
    fuel_extra_urban:{type:Number},
    fuel_combined:{type:Number},
})

const Volume = new Schema ({
    max_weights:{type:Number},
    fuel_tank:{type:Number},
})


const Specs = new Schema({
    power:{type:Number},
    power_per_litre:{type:Number},
    torque:{type:Number},
    fuel_system:{type:String},

})


const BrandSchema = new Schema(
    {
      brand:{type:String},
      id:{type:Number},
      year:{type:Number},
      main_image: {type:String},
      price:{type:Number},
      transmission:{type:String},
      fuel_type:{type:String},
      seating_capacity:{type:Number},
      engine:{type:Number},
      engine_specs:[Specs],
      volume_weights:[Volume],
      performance: [Performance],
      images_interior: [Interior],
      images_exterior: [Exterior],
    }
)

const CarsSchema = new Schema({
  a_class:[BrandSchema],
})





export default mongoose.model<ICars>('Cars', CarsSchema);