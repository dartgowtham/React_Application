import About_us from "./Components/About_us";
import Client from "./Components/Client";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Foot";
import Feedback from "./Components/Feedback"
import Contact_us from "./Components/Contact_us";
import Thinking from "./Components/Thinking";
import Real from "./Components/Real";
 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About_us/>
      <Client/>
      <Thinking/>
      <Real/>
      <Contact_us/>
    <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
