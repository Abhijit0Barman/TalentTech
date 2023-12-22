import send from "../assets/send.svg";
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";
import { useState } from "react";
import { MyTextareaComponent } from "../components/MyTextareaComponent";

export const Interview = () => {
  const [state, setState] = useState("");
  const hand = (e: any) => {
    e.preventDefault();
    console.log(state);
    setState("");
  };
  return (
    // <div>
    //   <div>
    //     <MyTextareaComponent/>
    //   </div>
    //   <form onSubmit={hand} className="flex m-auto mx-1 h-16 text-center justify-evenly">
    //     <input
    //     className=" w-full"
    //       onChange={(e)=>setState(e.target.value)}
    //       type="text"
    //       name="prompt"
    //       value={state}
    //       placeholder="Start Asking..."
    //     />
    //     <button className="" type="submit">
    //       <img className="h-10 w-12" src={send} alt="send"></img>
    //     </button>
    //   </form>
    // </div>
    <div className=" min-h-[100vh-14rem] flex items-center flex-col my-24 mx-40 mb-0">
      <div className=" overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-[70rem] h-[100vh-17rem]">
        <div className="m-4 py-8 px-12 flex items-start text-lg text-justify">
          <img className="object-cover w-14 mr-8 rounded-lg" src={user} alt="user" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            velit modi dolorem minus accusamus ipsam aliquid fuga reiciendis eum
            mollitia.
          </p>
        </div>
        <div className="m-4 py-8 px-12 flex items-start text-lg text-justify bg-[rgba(28,30,58,1)]">
          <img className="object-cover w-14 mr-8 rounded-lg" src={bot} alt="bot" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ab  aperiam omnis? Doloribus sit, explicabo
            explicabo, eos praesentium corporis doloremque? Laborum expedita
            modi velit maxime? Sit pariatur ipsum cumque.{" "}
          </p>
        </div>
      </div>
      <div className="mt-auto w-full flex flex-col items-center justify-center">
        <div className="p-2 bg-[rgba(28,30,58,1)] flex items-center rounded-lg  w-[68rem] ">
          <input
            className="bg-transparent border-0 w-full mr-[3rem] outline-none p-5 text-white"
            type="text"
            placeholder="Send a message..."
          />
          <button className="bg-transparent border-none">
            <img src={send} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};
