import './App.css';
import Hero from './components/Hero';
import Works from './components/Works';
import Core from './components/Core';
import Exec from './components/Exec'
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Hero/>
      <Works/>
      <Core/>
      <Exec/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
