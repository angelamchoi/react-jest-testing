import './App.css';
import React, {useEffect, useState, useRef} from "react";
import Input from "./components/Input";
import Button from "./components/Button";


function App() {
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div className="App">
      <Input showDiv={showDiv}/>
      <Button/>
    </div>
  );
}

export default App;
