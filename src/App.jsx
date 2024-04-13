import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home.jsx";
import { Create } from "./pages/Create.jsx";
import { UpdateCard } from "./pages/UpdateCard.jsx";
import { ViewCard } from "./pages/ViewCard.jsx";
import mtg_logo from "./images/mtg_logo.png";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <img src={mtg_logo} alt="Logo" />
        <Link to="/">HOME</Link>
        <Link to="create">CREATE</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="update/:id" element={<UpdateCard />} />
        <Route path="view/:id" element={<ViewCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;