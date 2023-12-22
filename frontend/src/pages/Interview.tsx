// import { MyTextareaComponent } from "../components/MyTextareaComponent";
import send from "../assets/send.svg";
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";
import { useState } from "react";
import { AiOutlineAudio, AiOutlineAudioMuted, AiOutlineSend } from "react-icons/ai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiReset } from "react-icons/bi";

// import useClipboard from "react-use-clipboard";

export const Interview = () => {
  // const [textToCopy, setTextToCopy] = useState("");
  // const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListion = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" })
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [state, setState] = useState<string>("");
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = (): void => {
    setNav(!nav);
    if (!nav) {
      startListion()
    } else {
      SpeechRecognition.stopListening()
      // setState(`${state} ${transcript}`)
      setState((p) => p + transcript)

      // setTextToCopy(transcript)
    }
  };
  const hand = (e: any) => {
    e.preventDefault();
    console.log(state);
    resetTranscript()
    setState("");
  };

  const handleReset = () => {
    resetTranscript()
    setState("");
  }

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className=" min-h-[100vh-14rem] flex items-center flex-col my-24 mx-40 mb-0">
      <div className=" overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-full min-w-fit h-[100vh-17rem]">
        <div className="m-4 py-8 px-12 flex items-start text-lg text-justify">
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
        </div>
      </div>
      <div className="mt-auto w-full flex flex-col items-center justify-center">
        <div className="p-2 bg-[rgba(28,30,58,1)] flex items-center rounded-lg mr-[3rem]  min-w-full ">
          <input
            onChange={(e) => setState(e.target.value)}
            className="bg-transparent border-0 w-full  outline-none p-5 text-white"
            type="text"
            placeholder="Send a message..."
            value={nav ? state + transcript : state}
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
