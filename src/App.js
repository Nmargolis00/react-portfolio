
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import aboutMe from './pages/aboutMe/aboutMe'

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <aboutMe />
      </Route>
      </Router>
  );
}

export default App;
