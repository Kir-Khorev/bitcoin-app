import logo from '../logo2.svg';

export default function Home() {
    return (
        <header className="App-header">
            <div>
                <h1>Home Page. React Bitcoin SPA</h1>
                <img src={logo} className="App-logo" alt="logo" style={{ width: '100px', margin: 'auto' }} />
            </div>
        </header>
    );
}
