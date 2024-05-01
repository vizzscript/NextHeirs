import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from "./components/User"

export default function App() {
  return (
      <div className="min-h-screen relative">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          {/* <Route path="/login/user/wills" elements={<Wills/>} /> */}
        </Routes>
      </Router>
    </div>
  )
}

