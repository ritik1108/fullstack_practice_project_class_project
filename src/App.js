import './App.css';
// import Home from './components/Pages/Home/Home';
// import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Write from './components/Pages/Write/Write';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Write />
    </div>
  );
}

export default App;
