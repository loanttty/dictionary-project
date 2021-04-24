import logo from './logo.svg';
import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="icon" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        Coded by Tran Thanh Loan
      </footer>
    </div>
  );
}