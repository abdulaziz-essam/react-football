import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/Navbar.js'
import {Button,Row,Col} from "react-bootstrap"
import Landingpage from '../src/components/landingPage/LandingPage'
function App() {
  return (
    <div className="App">
 <Navbar/>
 <Landingpage />
    </div>
  );
}

export default App;
