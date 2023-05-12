
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './pages/aboutMe/aboutMe';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';
import Portfolio from '../src/components/portfolio/portfolio';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>

  
     <NavBar />

    <Router>
     <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
     </Routes>
  
      </Router>
   
<Footer />
        </div>
  );
}

export default App;
