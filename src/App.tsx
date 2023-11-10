import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header>
        {/* Component med children */}
        <Navbar>
          <li>
            <Link to="beer-types">Beer types</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </Navbar>
      </header>
      <Outlet />
      {/* component Footer added */}
      <Footer />
    </div>
  );
}

export default App;
