import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Career from "./Career";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/career" component={Career} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
