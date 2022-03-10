import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Converter from './components/Converter/Converter';
import Watchlist from './components/Watchlist/Watchlist';
import NavBar from './components/Navbar';
import {
  HashRouter as Router, Link, Route, Routes, Redirect
} from 'react-router-dom'

// function App() {
//   const api = 'https://api.cryptorank.io/v1/currencies?api_key=e3440fe2cc290ca0ad530b27be5f05cc00db9ecbcbb0d1babeaddede1b21'

//   return (
//     <div className="App">
//       <Header />


//     </div>
//   );
// }

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
        123
        <img src={logo} className="App-logo" alt="logo" style={{ width: '100px', margin: 'auto' }} />
      </div>
    </header>
  );
}
