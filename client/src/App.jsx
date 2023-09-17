import Homeee from "./Homeee";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/AboutPage";
<<<<<<< HEAD

function App() {
  return (
    <div className="font-DM_Sans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
=======
import SignInPage from "./SignInPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/signin" element={<SignInPage />} />
        (checkSession?<Route path="/dashboard" element={< Homeee/>} />:{<Route path="/signin" element={<SignInPage />} />})
      </Routes>
    </Router>
>>>>>>> 7eaa9fd488ef80f31f11970ff9ff2fab2b7a1d00
  );
}

export default App;
