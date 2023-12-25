// import { MyTextareaComponent } from "../components/MyTextareaComponent";
import { sendMsgToOpenAI } from "../openAI";
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";
import { useEffect, useRef, useState } from "react";
import { AiOutlineAudio, AiOutlineAudioMuted, AiOutlineSend } from "react-icons/ai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiReset } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useClipboard from "react-use-clipboard";
type Todo = {
  text: string;
  isBot: boolean;
}

export function sendRole(x: string) {
  toast(`📖  You Choose ${x}`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  // setTimeout(()=>{
  //   // alert()
  // },2000)
}

export const Interview = () => {
  const [nam, setNam] = useState<string>("")
  // const [textToCopy, setTextToCopy] = useState("");
  // const [isCopied, setCopied] = useClipboard(textToCopy);
  const msgEnd = useRef<any | null>(null)
  const [todos, setTodos] = useState<Todo[]>([
    {
      text: `Hi, I am your Interviewer. `,
      isBot: true,
    }
  ])
  const startListion = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" })
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [state, setState] = useState<string>("");
  const [nav, setNav] = useState<boolean>(false);

  useEffect(() => {
    msgEnd.current.scrollIntoView()
  }, [todos])

  const handleNav = (): void => {
    setNav(!nav);
    if (!nav) {
      startListion()
    } else {
      SpeechRecognition.stopListening()
      setState((p) => p + transcript)
      // setTextToCopy(transcript)
    }
  };
  const hand = async (e: any) => {
    e.preventDefault();
    // console.log(state);
    const copyText = state
    resetTranscript()
    setState("");
    setTodos([
      ...todos,
      { text: copyText, isBot: false }
    ])
    const res = await sendMsgToOpenAI(state)
    // const res = "reply from ai"
    console.log(res);
    // setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodos([
      ...todos,
      { text: state, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  const handleReset = () => {
    resetTranscript()
    setState("");
  }

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const handleEnter = async (e: any) => {
    if (e.key === 'Enter') {
      await hand(e)
    }
  }

  return (
    <div className=" min-h-[100vh-14rem] flex items-center flex-col my-24 mx-40 mb-0">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=" overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-full min-w-fit h-[100vh-17rem]">
        {/* <div className="m-4 py-8 px-12 flex items-start text-lg text-justify">
          <img
            className="object-cover w-14 mr-8 rounded-lg"
            src={user}
            alt="user"
          />
          <p>
            mfffffffffffffffffffffffffffffffffffffollitia.
          </p>
        </div>
        <div className="m-4 py-8 px-12 flex items-start text-lg text-justify bg-[rgba(28,30,58,1)]">
          <img
            className="object-cover w-14 mr-8 rounded-lg"
            src={bot}
            alt="bot"
          />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </p>
        </div> */}
        {todos.map((ele, i) => (
          <div key={i} className={ele.isBot ? "m-4 py-8 px-12 flex items-start text-lg text-justify bg-[rgba(28,30,58,1)]" : "m-4 py-8 px-12 flex items-start text-lg text-justify"}>
            <img
              className="object-cover w-14 mr-8 rounded-lg"
              src={ele.isBot ? bot : user}
              alt="bot"
            />
            <p>{ele.text}</p>
          </div>
        ))}
        <div ref={msgEnd} />
      </div>
      <div className="mt-auto w-full flex flex-col items-center justify-center">
        <div className="p-2 bg-[rgba(28,30,58,1)] flex items-center rounded-lg mr-[3rem]  min-w-full ">
          <input
            onChange={(e) => setState(e.target.value)}
            className="bg-transparent border-0 w-full  outline-none p-5 text-white"
            type="text"
            placeholder="Send a message..."
            value={nav ? state + transcript : state}
            onKeyDown={handleEnter}
          />
          <div onClick={handleNav} className="block  text-[#1d8043] mr-4">
            {nav ? (
              <AiOutlineAudio size={20} />
            ) : (
              <AiOutlineAudioMuted size={20} />
            )}
          </div>
          <div onClick={handleReset} className="block  text-[#1d8043] mr-4">
            <BiReset size={20} />
          </div>
          <button onClick={hand} className="bg-transparent border-none text-[#1d8043]">
            {/* <img className="text-lg" src={send} alt="send" /> */}
            <AiOutlineSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * <div>
      <div>
        <MyTextareaComponent/>
      </div>
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
 */
