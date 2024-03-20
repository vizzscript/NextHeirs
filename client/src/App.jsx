import Header from "./components/Header";
import Connect from "./pages/Connect";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Registration from "./components/Registration"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
      <div className="min-h-screen relative">
      <Router>
        <Header />
        <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/registration" element={<Registration />} />
  {/* <Route path="/login" element={<Login />} /> */}
</Routes>
      <Hero/>
      <Connect/>
      <Footer/>
    </Router>
    </div>
  )
}

