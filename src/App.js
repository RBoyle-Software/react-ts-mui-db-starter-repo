import logo from './logo.svg';
import './App.css';
import MUI_Buttons from './components/MUI_Button';
import MUI_Forms from './components/MUI_Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MUI_Buttons />
        <MUI_Forms />
      </header>
    </div>
  );
}

export default App;
