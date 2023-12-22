
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

 import send from "../assets/send.svg";
 import bot from "../assets/bot.svg";
 import user from "../assets/user.svg";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export const Interview = () => {
  // const [state, setState] = useState("");
  // const hand = (e:any) => {
  //   e.preventDefault()
  //   console.log(state);
  //   setState("")
  // };
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  // Scroll to the bottom when a new message is added
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(scrollToBottom, [messages]);
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

    <div style={{ maxWidth: '85%', margin: 'auto' }}>
      <div style={{ border: '1px solid #ccc', minHeight: '300px', overflowY: 'auto', backgroundColor:'whitesmoke' }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              padding: '8px',
              textAlign: message.isUser ? 'left' : 'left',
              backgroundColor:'lightgrey',
              border: '1px solid white',
            }}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ marginTop: '8px' }}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type..."
          style={{ width: '90%', padding: '8px' }}
        />
        {/* <button onClick={handleSendMessage} style={{ padding: '8px', marginLeft: '8px' }}>
          Send
        </button> */}
        <button onClick={handleSendMessage} className="bg-[#1d8043] w-[60px] h-10 rounded-md font-medium mx-auto p-0.5 ml-2 hover:bg-[orange] align-bottom" type="submit">
        <img className="h-10 w-12 p-1" src={send} alt="send"></img>
        </button>

      </div>
    </div>
    // <div>
    //   <div></div>
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
  );
};
