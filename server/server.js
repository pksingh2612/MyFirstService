// Algolia depe.
// npm install axios --save
//npm install mongoose-algolia --save 
//npm install algoliasearch --save 
//
// just run nodemon server

//lib or module

const express = require("express");
const morgan  = require("morgan");
const bodyparser = require("body-parser");
const mongoose= require("mongoose");
const dotenv = require("dotenv").config({ path: 'D://Github//WorkingwithVue//amazonOMSircloneProject//server//.env' });
const User = require("./models/user");

const app= express();

const cors = require('cors');// npm install cors
// Why is CORS necessary? The CORS standard is needed because it allows servers to specify not just who can access its assets, 
// but also how the assets can be accessed. Cross-origin requests are made using the standard HTTP request methods.

mongoose.connect(process.env.DATABASE,
    { useNewUrlParser:true, useUnifiedTopology: true },
    (err)=>{
        if (err)
        {
        console.log(err);
        }
        else
        {
            console.log('Connected to the AmazonOM database');
        }
});

//Middlewares

app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors())



// //GET- Retrieve data from the server
// app.get("/",(req,res)=>{
//     console.log("server respond");
//     res.json("Hello amazon clone");
// });


// // POST - send data from the frontend to backend

// // user build module
// const User=require("./models/user");

// app.post("/",(req,res)=>{
//     let user= new User();
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.password = req.body.password;
    
//     //console.log(req.body.name);

//     user.save(err=>{
//         if(err){
//             res.json(err);
//         }else{
//             res.json("sucessfully saved");
//         }
//     });
// });

// require apis
const productRoutes= require("./routes/product");
app.use("/api",productRoutes);

const categoryRoutes= require("./routes/category");
app.use("/api",categoryRoutes);

const ownerRoutes= require("./routes/owner");
app.use("/api",ownerRoutes);

const userRoutes=require("./routes/auth");
app.use("/api",userRoutes);

const reviewRoutes = require("./routes/review");
app.use("/api", reviewRoutes);

const addressRoutes = require("./routes/address");
app.use("/api", addressRoutes);

const paymentRoutes = require("./routes/payment");
app.use("/api", paymentRoutes);

const orderRoutes = require("./routes/order");
app.use("/api", orderRoutes);

const searchRoutes = require("./routes/search");
app.use("/api", searchRoutes);


app.listen(6000,err=>{
    if(err){
        console.log(err);
    }else{
        console.log("Listening on PORT",6000);
    }
});
