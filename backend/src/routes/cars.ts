import express from 'express'
import Cars from '../models/cars'

const router = express.Router();


router.get('/', (req:any, res:any )=>{
    Cars.find()
    .then(car=> res.json(car))
    .catch(err => res.status(400).json(`Error: ${err}`))
})


router.get('/car',(req:any, res:any)=>{
    res.json({ hello: 'world'})
})


export default router