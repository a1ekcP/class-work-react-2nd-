import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Products/>
        </Container>
      </header>
    </div>
  );
}

export default App;
