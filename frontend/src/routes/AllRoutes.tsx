import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Interview } from "../pages/Interview"
import { Role } from "../pages/Role"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"
import { Service } from "../pages/Service"
import { Contact } from "../pages/Contact"
import { About } from "../pages/About"
import NotFound from "../pages/NotFound"

export const AllRoutes = () => {
  return <Routes>
    <Route path="/*" element={<NotFound />} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/service" element={<Service />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/role" element={<Role />} />
    <Route path="/role/:track" element={<Interview />} />
  </Routes>
}
