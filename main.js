// const express = require ('express');

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

// const mongoose = require('mongoose'); 
// const Car = require ('./models/car');
// const Owner = require ('./models/owner');

// const verifyToken = require('./middleware/tokenHandler');
// const dotenv = require('dotenv')

// dotenv.config();

// // const dBuri = 'mongodb://localhost:27017/techyjauntcars';
// const dBuri = process.env.DB_URI
// // const JWTSECRET = 'techyjaunty';
// const JWTSECRET = process.env.JWTSECRET;
// const app = express();
// // const port = 4000;
// const port = process.env.port;
// app.use(bodyParser.json());

 

// mongoose.connect(dBuri)
//   // useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {
//   console.log('Connected to MongoDB....')
// })
// .catch((err) => {
//   console.log('Failed to connect to MongoDB...', err)
// });
// app.use('/owners'. require('./routes/owner'));
// app.use('/cars'. require('./routes/car'));

// app.get('/cars/',async (req, res) => {
//   try{
//     const cars = await Car.find()
//   res.status(200).json(cars);
//   }
//   catch(error){
//     console.log(error.message);
//     res.status(500).json({
//       error: "Internal Server Error"
//     });
//   }
// });

// app.post('/cars/', async (req, res) =>{
// const {brand, model } = req.body;

// if (!brand){
//     return res.status(400).send({
//         error: "Brand Field is required"
//     });
//   }
// if (!model){
//     return res.status(400).send({
//         error: "Model Field is required"
//     });
// }


// const newCar = new Car({
// brand, model});

// await newCar.save();


// res.status(201).send(newCar);
// });

// app.put('/cars/:id/', async (req,res) => {
//   const {brand, model} = res.body;
//    carId = req.params.id;

//    let car = await Car.findByIdAndUpdate(
//     carId,
//     {brand,model},
//     {new: true}
//    ).catch ((error) => {
//     res.status(400).json({
//       error: error.message
//     })
//    });

//   res.status(200).json(car);
// });
// app.get('/cars/:id/', async (req,res) => {

//   carId = req.params.id;
 
//  await Car.findById(carId)

//   .then((car) => {
//    res.status(200).json(car);
//    })
//  .catch ((error) => {
//   res.status(400).json({
//         error: error.message
//       })
//  });

// });
// app.delete('/cars/:id/',  async (req,res) => {
  
//   carId = req.params.id;

//  await Car.findById(carId)
//  .then((car) => {
  
//   if(!car){
//     return res.status(404).json({
//       error: "Car not Found"
//     });
//   }
// })
//   .catch ((error) => {
//     res.status(400).json({
//           error: error.message
//         })
//    });

//    await Car.findByIdAndDelete(carId)
//      .catch ((error) => {
//        res.status(400).json({
//              error: error.message
//            })
//       });
   
//   res.status(200).json({});
// });

// app.get('/Owners/', async (req, res) => {
// try {
//   const owners = await Owner.find();
//   res.status(200).json(owners);
// } catch(error){
//   console.log(error.message);
//   res.status(500).json({
//     error: "Internal Server Error"
//   });
// }

// });
// app.post('/owners/', async (req, res) => {
//   const {name, car } = req.body;

//   if (!name){
//       return res.status(400).send({
//           error: "Name Field is required"
//       });
//     }
//  let carID;

//   if (!car){
//   carID = null
//   }else{
//     carID = car;
//   }

//   const newOwner = new Owner({ 
//     name: name, 
//     carID: carID 
//   });
//     await newOwner.save();
    
//     res.status(201).send(newOwner);
//     });
//     app.get('/Owners/:id/', async (req, res) =>{
//     const  ownerID = req.params.id;

//      await Owner.findById(ownerID)
//      .then((owner) => {
//      if(!owner){
//       return res.status(404).json({
//         error: "Owner not Found"
//       })
//      }

//       res.status(200).json(owner);
//      })
//      .catch ((error) => {
//       res.status(400).json ({
//         error: error.message
//       });
//      });

//     });

//     app.put('/Onwers/:id/', async (req,res) => {
// const ownerID = req.params.id;

// const { name, car } = req.body;
// if (!name){
//   return res.status(400).json({
//     error: "Name field Required"
//   });
// }

// const UpdatedCar = car || null;
// const isOwnerIDvalid = mongoose.Types.ObjectId.isValid(ownerID);
// const isCarIDvalid = mongoose.Types.ObjectId.isValid(car);

// if(isOwnerIDvalid) {
//   return res.status(400).json({
//     error: "Invalid Owner ID"
//   });
// }
// if(isCarIDvalid) {
//   return res.status(400).json({
//     error: "Invalid Car ID"
//   });
// }

// // check if owner exist
// await Owner.findById(ownerID)
// .then((owner) =>{
//  if(!owner){
//   return res.status(404).json({
//     error: "Owner not found"
//   });
//  }
// })
// .catch ((error) => {
//   res.status(400).json({
//     error: error.message
//   });
// });



// // check if car exist
// await Owner.findById(car)
// .then((car) =>{
//  if(!car){
//   return res.status(404).json({
//     error: "Car not found"
//   });
//  }
// })
// .catch ((error) => {
//   res.status(400).json({
//     error: error.message
//   });
// });

// let owner = await Owner.findByIdAndUpdate(
//   ownerID,
//   { name: name, car: UpdatedCar},
//   { new: true}
// ).catch((error) => {
//   res.status(400).json({
//     error:error.message
//   });
// });

// // await Owner.CarfindByIdAndDelete(ownerID)
// res.status(200).json(owner);

//     });

//     app.delete('/Onwers/:id/', async (req,res) => {
//       const ownerID = req.params.id;
//  const isOwnerIDvalid = mongoose.Types.ObjectId.isValid(ownerID);

//  if(isOwnerIDvalid) {
//   return res.status(400).json({
//     error: "Invalid Owner ID"
//   });
// }
// // check if owner exist
// await Owner.findById(ownerID)
// .then((owner) =>{
//  if(!owner){
//   return res.status(404).json({
//     error: "Owner not found"
//   });
//  }
// })
// .catch ((error) => {
//   res.status(400).json({
//     error: error.message
//   });
// });
// await Owner.CarfindByIdAndDelete(ownerID)
// res.status(200).json({});
// });
    
// app.listen(port, () => {
//   console.log(`The server is running at http://localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const _ = require('dotenv').config();
const connectDB = require('./config/dbconn');

connectDB();

const port = process.env.port; // Server Port
const app = express();
app.use(bodyParser.json());

app.use('/owners', require('./routes/owner'));
app.use('/cars', require('./routes/car'));

app.listen(port, () => {
    console.log(`The server is running on port: ${port}...`)
});

let man = Math.random().toString().slice(2,12);
console.log(man);