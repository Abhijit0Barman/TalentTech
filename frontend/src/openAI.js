import OpenAI from "openai";

// const openai = new OpenAI({apiKey: process.env.API_KEY});
const openai = new OpenAI({
  // organization: 'org-ozMcPlOieicHo5W6VznbyW7j',
  // apiKey: "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",
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message) {
  // console.log(typeof message);
  // const res = await openai.chat.completions.create({ //for chat
  const res = await openai.completions.create({
    //for custom reply
    messages: [
      { role: "user", content: "Who won the world series in 2020?" },
      // {
      //   role: "system",
      //   content: "You are a helpful assistant designed to output JSON.",
      // },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
    max_tokens: 100,
    prompt: message,
    // temperature: 0.5,
    // top_p: 1,
    // frequency_penalty: 0,
    // presense_penalty: 0,
  });
  console.log(res.choices[0].message.content); // for chat
  return res.data.choices[0].text; //for custom reply
}

// =================================================

// const { Configuration, OpenAIApi } = require("openai");

// const openai = new OpenAIApi( Configuration({
//   // organization: "",
//   apiKey: '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',
// }))

// const completion = openai.createChatCompletion({
//   messages: [
//     //  {"role": "user", "content": "Who won the world series in 2020?"},
//     // {"role": "system", "content": "You are a helpful assistant."},
//     //  {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
//     { role: "user", content: "Hello World" },
//   ],
//   model: "gpt-3.5-turbo",
// });

// console.log(completion.data.choices[0].message);

// export async function sendMsgToOpenAI(message) {
//   // const res = await openai.createCompletion({
//     const res = await openai.completions.create({
//     model: "text-davinci-003",
//     prompt: message,
//     temperature: 0.5,
//     max_tokens: 2000,
//     top_p: 1,
//     frequency_penalty: 0,
//     presense_penalty: 0,
//   });
//   return res.data.choices[0].text;
// }

// ===================================================du

// const express = require("express");
// const OpenAI = require("openai");
// const { Messages } = require("openai/resources/beta/threads/messages/messages");
// require("dotenv").config();
// const cors = require("cors")
// const app = express();
// app.use(express.json());
// app.use(cors());

// // const api_key="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";
// const api_key= process.env.key;

// const openai = new OpenAI({
//     // apiKey:"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"
//     apiKey:api_key
// })
// app.post("/getRes",async(req,res)=>{
//     const prompt = req.body.prompt;
//     const response = await openai.chat.completions.create({
//         model:'gpt-3.5-turbo',
//         messages:[{"role":"user","content":prompt}],
//         max_tokens:100,
//     })
//     console.log(prompt,response.choices[0].message.content)
//     res.send(response.choices[0].message.content)
// })

// app.listen(8080,()=>{
//     console.log("server is runnig at port 8080");
// });
