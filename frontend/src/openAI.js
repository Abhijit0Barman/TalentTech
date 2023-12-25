import OpenAI from "openai";

// const openai = new OpenAI({apiKey: process.env.API_KEY});
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message) {
  const res = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: "Who won the world series in 2020?" },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });
  console.log(res);
  return res.data.choices[0].text;
}






// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   // organization: "",
//   apiKey: process.env.API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const completion = openai.createChatCompletion({
//   messages: [
//     // {"role": "system", "content": "You are a helpful assistant."},
//     //  {"role": "user", "content": "Who won the world series in 2020?"},
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