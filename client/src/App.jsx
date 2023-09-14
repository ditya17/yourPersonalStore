import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="font-DM_Sans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
import Homeee from "./Homeee";
import SignInPage from "./SignInPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        (checkSession?<Route path="/home" element={< Homeee/>} />:{<Route path="/" element={<SignInPage />} />})
      </Routes>
    </Router>
  );
}

export default App;
