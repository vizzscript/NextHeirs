import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from "./components/User"
import Error from './components/Error'
import Wills from "./components/Wills";
export default function App() {
  return (
      <div className="min-h-screen relative">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/login/user/wills" elements={<Wills/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}

