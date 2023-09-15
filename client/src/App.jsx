import Homeee from "./Homeee";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/AboutPage";
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
  );
}

export default App;
