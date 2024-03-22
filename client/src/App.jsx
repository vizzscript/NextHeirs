import Home from "./pages/Home";
import Registration from "./components/Registration"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import User from "./components/User"
import Error from './components/Error'
export default function App() {
  return (
      <div className="min-h-screen relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration/login" element={<Login />} />
          <Route path="/login/user" element={<User />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}

