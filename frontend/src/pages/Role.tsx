import { Link } from "react-router-dom";

export const Role = () => {
  return (
    // <div className="  ">

    <div className="mx-auto text-center max-w-fit mt-[35px] justify-center pb-8">

      <p className="font-bold p-2 text-4xl text-[#1d8043]">Initiate the interview</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Select Your Role</h1>
      
      <div className="grid md:gap-12 sm:gap-10 gap-6 md:grid-cols-2">
        <Link to={"/role/node"}>
          <div className="bg-[#1d8043] h-[140px] rounded-lg p-6 shadow-md transform hover:bg-[orange] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h2 className="text-xl text-white font-medium mb-2">NODE</h2>
            <p className="text-white">
              For the Role of a NODE Backend Developer
            </p>
          </div>
        </Link>

        <Link to={`/role/mern`}>
          <div className="bg-[#1d8043] h-[140px] rounded-lg p-6 shadow-md transform hover:bg-[orange] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h2 className="text-xl text-white font-medium mb-2">MERN</h2>
            <p className="text-white">For the Role of a MERN Stack Developer</p>
          </div>
        </Link>

        <Link to={`/role/java`}>
          <div className="bg-[#1d8043] h-[140px] rounded-lg p-6 shadow-md transform hover:bg-[orange] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h2 className="text-xl text-white font-medium mb-2">JAVA</h2>
            <p className="text-white">
              For the Role of a JAVA Backend Developer
            </p>
          </div>
        </Link>

        <Link to={`/role/python`}>
          <div className="bg-[#1d8043] h-[140px] rounded-lg p-6 shadow-md transform hover:bg-[orange] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h2 className="text-xl text-white font-medium mb-2">PYTHON</h2>
            <p className="text-white">
              For the Role of a PYTHON Backend Developer
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
