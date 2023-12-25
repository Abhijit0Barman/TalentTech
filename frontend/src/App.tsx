import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { useContext } from 'react'
import { LoginPageContext } from './context/LoginPageContextProvider';
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  const { isLoginPageVisible, isRegisterPageVisible } = useContext(LoginPageContext);

  return (
    <div className="bg-[rgb(3,0,31)] text-white">
      <Navbar />
      <AllRoutes />
      <Footer />
      {isLoginPageVisible && <Login />}
        {isRegisterPageVisible && <Signup />}
       
    </div>
  );
}

export default App;
