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
