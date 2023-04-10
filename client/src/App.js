import { useContext } from 'react';
import './App.css';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Single from './components/Pages/Single/Single';
import Write from './components/Pages/Write/Write';
import TopBar from './components/TopBar/TopBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <div>
      <Router>
      <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user?<Home /> : <Register />} />
          <Route path="/login" element={user?<Login />:<Register />} />
          <Route path="/write" element={user ? <Write /> : <Register/>} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
