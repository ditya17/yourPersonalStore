import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import SignInPage from "./pages/SignInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Dashboard/admin/MainLayout";
import Dashboard from "./Dashboard/pages/Dashboard"
import Customers from "./Dashboard/pages/Customers";
import Categorylist from "./Dashboard/pages/Categorylist";
import Productlist from "./Dashboard/pages/Productlist";
import Addcat from "./Dashboard/pages/Addcat";
import Addproduct from "./Dashboard/pages/Addproduct";
import Profile from "./Dashboard/pages/Profile";
import MainLayoutUser from "./Dashboard/User/MainLayoutUser";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* (checkSession?<Route path="/admin" element={< MainLayout/>} />:{<Route path="/signin" element={<SignInPage />} />})  */}
        <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Customers />} />
            <Route path="profile" element={<Profile />} />
            <Route path="list-category" element={<Categorylist />} />
            <Route path="category" element={<Addcat />} />
            <Route path="list-product" element={<Productlist />} />
            <Route path="product" element={<Addproduct />} />
          </Route>
          <Route path="/user" element={<MainLayoutUser />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Customers />} />
            <Route path="profile" element={<Profile />} />
            <Route path="list-category" element={<Categorylist />} />
            <Route path="category" element={<Addcat />} />
            <Route path="list-product" element={<Productlist />} />
            <Route path="product" element={<Addproduct />} />
          </Route>
      </Routes>


    </Router>
  );
}

export default App;
