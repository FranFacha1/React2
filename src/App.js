import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
function App() {
  return (
    <div className="App"> 
    <NavBar/>
    <Counter nombre= "Componente 1"></Counter>
    <Counter nombre= "Componente 2"></Counter>
    <Counter nombre= "Componente 3"></Counter>
    </div>
  );
}

export default App;
