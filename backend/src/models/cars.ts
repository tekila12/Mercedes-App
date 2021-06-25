import mongoose, { Schema } from 'mongoose';
import ICars from '../interfaces/cars'

const Exterior = new Schema({
    image_one:{type:String},
    image_two:{type:String},
    image_three:{type:String},
    image_four:{type:String},
})

const Interior = new Schema ({
    image_one:{type:String},
    image_two:{type:String},
    image_three:{type:String},
    image_four:{type:String},
})

const Performance = new Schema({
    acceleration:{type:String },
    maximum_speed:{type:String},
    fuel_urban:{type:String},
    fuel_extra_urban:{type:String},
    fuel_combined:{type:String},
})

const Volume = new Schema ({
    max_weights:{type:String},
    fuel_tank:{type:String},
})


const Specs = new Schema({
    power:{type:String},
    power_per_litre:{type:String},
    torque:{type:String},
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