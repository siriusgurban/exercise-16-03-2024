import MovieCard from "./components/MovieCard";
import GithubCard from "./components/GithubCard";
import SliderCard from "./components/SilderCard";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import VendingMachine from "./components/VendingMachine";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Soda from "./components/Soda";
import Chips from "./components/Chips";
import Fish from "./components/Fish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/githubcard" element={<GithubCard />} />
          <Route path="/sildercard" element={<SliderCard />} />
          <Route path="/vendingmachine" element={<VendingMachine />} />
          <Route path="/vendingmachine/soda" element={<Soda />} />
          <Route path="/vendingmachine/chips" element={<Chips />} />
          <Route path="/vendingmachine/fish" element={<Fish />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
