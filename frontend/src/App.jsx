import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/about/Homeabout";
import Service from "./Pages/service/Servicehome";
import Contact from './Pages/contact/Contact'
import Appointment from "./Pages/appointment/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        
      </Routes>
    </Router>
  );
}

export default App;
