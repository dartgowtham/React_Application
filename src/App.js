import About_us from "./Components/About_us";
import Client from "./Components/Client";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Foot";
 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About_us/>
      <Client/>

      <Footer/>
    </div>
  );
}

export default App;
