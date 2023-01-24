// React imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

// Components
import NavBar from './components/NavBar'


function App() {
  const { user, authIsReady } = useContext(AuthContext)

  return (
    <div className="App">
      
      {authIsReady && (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
