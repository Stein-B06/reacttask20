import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { Outlet, Link } from "react-router-dom";

//This is the layout-page used for creating other pages. It contains Navbar and Footer.

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
            <Link to="Home">Home</Link>
          </li>
          <li>
            <Link to="Beerhistory">Beerhistory</Link>
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
