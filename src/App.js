import logo from './logo2.svg';
import './App.css';
import Header from './components/Header';
import Converter from './components/Converter/Converter';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/Navbar';
import { HashRouter as Router, Link, Route, Routes, Redirect } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

function Home() {
  return (
    <header className="App-header">
      <div>
        <h1>Home Page. React Bitcoin SPA</h1>
        <img src={logo} className="App-logo" alt="logo" style={{ width: '100px', margin: 'auto' }} />
      </div>
    </header>
  );
}
