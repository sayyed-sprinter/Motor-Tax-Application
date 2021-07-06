const express =require('express');
const mongoose = require('mongoose')
const bodyParser=require('body-parser') 
const cors=require('cors')

const vehicleRoute=require('./routes/vehicle')
const db=require('./config/db')

const app=express();
app.use(express.json());
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(vehicleRoute)

app.listen(99); 