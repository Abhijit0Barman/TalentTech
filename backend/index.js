const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const openRouter = require("./routes/interview.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/interview", openRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(
      `Database is connected & Server is running at ${process.env.PORT}`
    );
  } catch (error) {
    console.log(error);
  }
});
