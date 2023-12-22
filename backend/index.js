const express = require("express");
const { connection } = require ("./db");
const openRouter = require("./routes/interview.routes");
require("dotenv").config();

const app= express();
 app.use(express.json());

 const port = process.env.PORT;

 app.use("/interview",
openRouter
 );



 app.listen(port , async()=>{
 try {
    await connection;
    console.log("Database is connected");
    // console.log("Server is  connected to port 3500");
    console.log(`http://localhost:${process.env.PORT}`)
 } catch (error) {
    console.log(error);
 }
 })
