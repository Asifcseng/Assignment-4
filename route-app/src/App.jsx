import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import NavBar from "./Pages/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
