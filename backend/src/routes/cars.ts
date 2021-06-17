import express from 'express'
import Cars from '../models/cars'

const router = express();


router.get('/cars', (req:any, res:any )=>{
    Cars.find()
    .then(car=> res.json(car))
    .catch(err => res.status(400).json(`Error: ${err}`))
})


router.get('/cars/:id',(req:any, res:any)=>{
    Cars.findById(req.params.id)
    .then(car=>res.json(car))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})


export = router