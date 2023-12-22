const express=require("express");
require("dotenv").config();
const cors=require("cors");
// const { openAIAPI } = require("openai");

// const configuration = {
//     apikey: process.env.API_KEY,
//   };
  
//   const openai = new openAIAPI(configuration);
  
  const openaiLibrary = require("openai"); // Replace with the correct library name

  const configuration = {
    apiKey: process.env.API_KEY,
  };
  
  const openai = new openaiLibrary.Completion(configuration);
const app=express();

app.use(cors());
app.use(express.json());

app.get("/",async(req,res)=>{
    res.send({"msg":"Hello"})
});


app.listen(8080,()=>{
    console.log('server running at port 8080')
})