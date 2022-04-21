import "./App.css";
import { reducer, initialState } from "./reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
