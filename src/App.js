
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './pages/aboutMe/aboutMe'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>

  
     <NavBar />

    <Router>
     <Routes>
        <Route path="/" element={<AboutMe/>}/>
     </Routes>
  
      </Router>
   

        </div>
  );
}

export default App;
