import logo from './images/spoop-logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Spoop</h1> */}

      <div class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} style={{width:130}} alt="Spoop logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
