import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import LandingPage from './pages/home/Home'
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";

function App() {  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

        </Routes>
        </Router>
    </>
  )
}

export default App
