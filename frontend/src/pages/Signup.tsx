import React, { useContext, useState, ChangeEvent, FormEvent } from 'react';
import { LoginPageContext } from '../context/LoginPageContextProvider';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postUserRegistration } from '../redux/Authentication/action';
import toast, { Toaster } from 'react-hot-toast';
//import { LoginPageContextProps } from '../context/LoginPageContextProvider';

// interface LoginPageContextProps {
//   isLoginPageVisible: boolean;
//   isRegisterPageVisible: boolean;
//   handleToggleLoginPage: () => void;
//   handleToggleRegisterPage: () => void;
// }

interface UserData {
  username: string;
  email: string;
  password: string;
}

export const Signup: React.FC = () => {
  // const contextValue = useContext<LoginPageContextProps | undefined>(LoginPageContext);

  // if (!contextValue) {
  //   // Handle the case where contextValue is undefined
  //   return <div>Error: LoginPageContext is undefined</div>;
  // }
  const { handleToggleLoginPage, handleToggleRegisterPage } = useContext(LoginPageContext);

  const [newUserData, setNewUserData] = useState<UserData>({ username: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePostUser = async (e: FormEvent) => {
    e.preventDefault();
    const status = await dispatch(postUserRegistration(newUserData));
    if (status === 201) {
      toast.error('Use different email address.', {
        style: {
          borderRadius: '10px',
          background: '#5f8fa821',
          color: '#fff',
        },
      });
    } else {
      toast.success('You have successfully registered!', {
        icon: '🎉',
        style: {
          borderRadius: '10px',
          background: '#5f8fa821',
          color: '#fff',
        },
      });
    }
  };

  return (
    <div>
      <div onClick={()=>handleToggleRegisterPage} className="bg-[#3031504d] backdrop-blur-sm w-full h-screen fixed top-0 left-0 z-[52]"></div>
      <div>
        <Toaster />
      </div>
      <div className={`fixed w-[90%] sm:w-[initial] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[52]`}>
        <div className='relative bg-[#152532] rounded-md w-full sm:w-[350px] flex flex-col items-center gap-3 p-7 shadow-[0px_15px_25px_rgba(109,71,222,0.15),0px_5px_10px_rgba(77,79,179,0.22)]'>
          <div onClick={()=>handleToggleRegisterPage} className='absolute cursor-pointer rounded-lg top-2 right-2 py-[0.1rem] px-3 bg-[#1B2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]' >
            ESC
          </div>
           <h1 className="my-5 text-xl font-bold">REGISTRATION</h1>
          <form onSubmit={handlePostUser} className="w-full flex flex-col items-center gap-3">
            <input
              onChange={handleInputChange}
              type="text"
              name="username"
              value={newUserData.username}
              placeholder="Enter your username"
              required
              className="bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%] outline-none focus:outline-indigo-400 focus:outline-[3px]"
            />
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              required
              value={newUserData.email}
              placeholder="Enter your email id"
              className="bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%] my-6 outline-none focus:outline-indigo-400 focus:outline-[3px]"
            />
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
              value={newUserData.password}
              placeholder="Enter password"
              required
              className="bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%] outline-none focus:outline-indigo-400 focus:outline-[3px]"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="py-1 px-8 my-5 rounded-lg bg-[#1B2635] space-x-9 hover:scale-105 active:scale-95 active:shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3)] transition-all duration-150 shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]"
            />
            <p>
              Already have an account?{' '}
              <Link to='' className="text-indigo-500 hover:text-indigo-400" onClick={()=>handleToggleLoginPage}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

