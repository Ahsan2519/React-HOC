import React from "react";
import "../assets/App.css";
import Child from "./Child";
import Counter from "./Counter";
import Hover from "./Hover";
import { UserProvider } from "./userContext";

export const UserStack = React.createContext("React");

function App() {
  return (
    <div className="App">
      {/* if we comment userprovider then default value will be passed */}
      <UserProvider value="parent">
        <UserStack.Provider value="MearnStack Developer">
          <Counter />
          <Hover />
          <Child />
        </UserStack.Provider>
      </UserProvider>
    </div>
  );
}

export default App;
