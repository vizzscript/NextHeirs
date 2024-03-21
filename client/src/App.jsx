import Home from "./pages/Home";
import Registration from "./components/Registration"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";

export default function App() {
  return (
      <div className="min-h-screen relative">
      <Router>
        <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/registration" element={<Registration />} />
  <Route path="/login" element={<Login />} />
  <Route path="/login/registration" element={<Login />} />
</Routes>
    </Router>
    </div>
  )
}

