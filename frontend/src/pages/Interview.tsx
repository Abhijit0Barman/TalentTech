import send from "../assets/send.svg";
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";
import { useState } from "react";

export const Interview = () => {
  const [state, setState] = useState("");
  const hand = (e:any) => {
    e.preventDefault()
    console.log(state);
    setState("")
  };
  return (
    <div>
      <div></div>
      <form onSubmit={hand} className="flex m-auto mx-1 h-16 text-center justify-evenly">
        <input
        className=" w-full"
          onChange={(e)=>setState(e.target.value)}
          type="text"
          name="prompt"
          value={state}
          placeholder="Start Asking..."
        />
        <button className="" type="submit">
          <img className="h-10 w-12" src={send} alt="send"></img>
        </button>
      </form>
    </div>
  );
};
