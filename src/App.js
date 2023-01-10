import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Skills from './components/Skills';
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Project/>
      <Contact SERVICE_ID={process.env.REACT_APP_SERVICE_ID} TEMPLATE_ID={process.env.REACT_APP_TEMPLATE_ID} PUBLIC_KEY={process.env.REACT_APP_PUBLIC_KEY}/>
      <Footer/>
    </div>
  );
}

export default App;
