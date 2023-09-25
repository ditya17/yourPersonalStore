import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import SigninPage from "./pages/signin/SigninPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SigninPage />} />
        (checkSession?
        <Route path="/" element={<HomePage />} />:
        {<Route path="/signin" element={<SigninPage />} />})
      </Routes>
    </Router>
  );
}

export default App;
