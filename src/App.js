import About_us from "./Components/About_us";
import Client from "./Components/Client";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Foot";
import Feedback from "./Components/Feedback"
import Contact_us from "./Components/Contact_us";
import Thinking from "./Components/Thinking";
import Real from "./Components/Real";
import Approach from "./Components/Approach";
import Fund from "./Components/Fund";
import "./App.css"
import Navbars from "./Components/Navbar";
 

function App() {
  return (
    <div className="App">
      <Navbars/>
       <Home/>
      <Approach/> 
       {/* <Fund/> */}
      <Footer/> 
    
      {/* <About_us/>
      <Client/>
      <Thinking/>
      <Real/>
      <Contact_us/> */}

    </div>
  );
}

export default App;
