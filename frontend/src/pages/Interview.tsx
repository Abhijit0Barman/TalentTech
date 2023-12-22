 import send from "../assets/send.svg";
// import bot from "../assets/bot.svg";
// import user from "../assets/user.svg";
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
