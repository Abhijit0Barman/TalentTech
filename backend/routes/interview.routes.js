const express = require("express");
const OpenAI = require("openai");

require("dotenv").config();

const openRouter = express.Router();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

// console.log(openai);

let interviewContent = {
  messages: [],
};

openRouter.get("/getting",(req,res)=>{
    res.status(200).send("HEllo")
})

openRouter.post("/start-interview", async (req, res) => {
  try {
    const { techStack, options } = req.body;

    // const startInterviewPromt = startPrompt(techStack, options);

    const startInterview = [
      { role: "system", content: startPrompt(techStack, options) },
      {
        role: "user",
        content: "Start the interview",
      },
    ];

    // Conversation with system and user;
    // interviewContent ={
    //     messages: [
    //         {role: "system", content:startInterviewPromt},
    //         {
    //             role: "user",
    //             content: "Start the interview",
    //         },
    //     ],
    // };

    // sending response and get the assistant's response;
    const repsonse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: startInterview,
    });

    console.log(repsonse);

    // const assistantResponse = repsonse.choices[0]?.message?.content;

    // startInterview.messages.push({
    //     role: "assistant",
    //     content: assistantResponse,
    // });

    console.log(interviewContent);

    // res.status(200).json({ role: "assistant", content: assistantResponse})
    res.status(200).send(repsonse);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

openRouter.post("/next-answer", async (req, res) => {
  try {
    // Extract the user's answer from the request body
    const userAnswer = req.body.answer;

    // Add the user's answer to the conversation state
    interviewContent.messages.push({ role: "user", content: userAnswer });

    // Send the updated conversation state to OpenAI and get the assistant's response
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: interviewContent.messages,
    });

    // Extract the assistant's response
    const assistantResponse = response.choices[0]?.message?.content;

    interviewContent.messages.push({
      role: "assistant",
      content: assistantResponse,
    });

    // Send the assistant's response to the user
    console.log(interviewContent);
    res.status(200).json({ role: "assistant", content: assistantResponse });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

openRouter.post(
  "/end-interview",
  // jwtSecurity.verifyToken,
  async (req, res) => {
    try {
      // Hardcoded prompt to end the interview
      const endInterviewPrompt = endPrompt();

      // Add the end interview prompt to the conversation state
      interviewContent.messages.push({
        role: "user",
        content: endInterviewPrompt,
      });

      // Send the final conversation state to OpenAI and get the assistant's response
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: interviewContent.messages,
      });

      // Extract the assistant's response
      const assistantResponse = response.choices[0]?.message?.content;
      interviewContent.messages.push({
        role: "assistant",
        content: assistantResponse,
      });

      // Send the interview report to the user
      console.log(interviewContent);
      const numbers = assistantResponse.match(/\b[0-9]\b/g);
      const user = await UserModel.findOne(
        { email: req.body.email },
        { password: 0 }
      );
      user.scores.push({
        Subject_Matter: numbers[0],
        Communication: numbers[1],
        Interview: numbers[2],
      });
      await user.save();
      res.status(200).json({ role: "assistant", content: assistantResponse });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
);

const startPrompt = (stack, options) => {
  return `You are a virtual interviewer conducting an interview with a candidate for a ${stack}
      stack developer position. You may ask questions on following topics
      ${options.join(" ")}
      ,you MUST Ask questions one by one and not all at once,it is very important you ask only one question at a time,
      it is also very important that you dont give feedback after every answer , rather give feedback scores only after the candidate end the interview
      it is very important that you dont ask questions such as "are you ready" or "should we begin" or "introduce yourself".
      rather ask the first question immediately, wait for the candidate to respond you back with an answer , it is important that candidate does not give one word or very short answer, ask them to elaborate if they do so. then ask the next question,
      Candidate may ask you to end the interview, after the candiate has ended the interview , generate a report with average score in both subject matter expertise and coommunication skills and interview skills`;
};

//   End promt
const endPrompt = () => {
  return `End the interview, give feedback, Judge the candiate on the Subject matter expertise, commmunication skills and interview skills on a scale of 1 -10,
      it is very imporant that you mention average score in Subject Matter Expertise and Communication Skills and interview skills,
      taking context from previous answers.`;
};

module.exports = openRouter;
