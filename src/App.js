import logo from './logo.svg';
import './App.css';
import BoxList from './part 1/BoxList';
import TodoList from './part2/TodoList';

function App() {
  return (
    <div className="App">
      <BoxList />
      <TodoList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
