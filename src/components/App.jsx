import "../assets/App.css";
import Child from "./Child";
import Counter from "./Counter";
import Hover from "./Hover";
import {UserProvider} from "./userContext"

function App() {
  return (
    <div className="App">
      {/* if we comment userprovider then default value will be passed */}
      <UserProvider value="parent" >
      <Counter />
      <Hover />
      <Child />
      </UserProvider>
    </div>
  );
}

export default App;
