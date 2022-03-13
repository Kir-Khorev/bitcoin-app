import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Converter from './components/Converter/Converter';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

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

