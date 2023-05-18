
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './pages/aboutMe/aboutMe';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';
import Portfolio from '../src/components/portfolio/portfolio';


import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>

  
     <NavBar />

    <Router>
     <Routes>
        <Route path="/react-profile" element={<AboutMe/>}/>
        <Route path="/react-portfolio/contact" element={<Contact/>}/>
        <Route path="/react-portfolio/portfolio" element={<Portfolio/>}/>
     </Routes>
  
      </Router>
   
<Footer />
        </div>
  );
}

export default App;
