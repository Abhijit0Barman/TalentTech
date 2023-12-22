import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    // <div className="bg-gray-200">
    <div className="bg-[rgb(3,0,31)] text-white">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
