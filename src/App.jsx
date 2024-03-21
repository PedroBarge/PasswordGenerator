import "./App.css";
import { useState } from "react";

import Checkbox from "./Componets/Checkbox/Checkbox";
import Button from "./Componets/Button/Button";
import ButtonGenerator from "./Componets/Button/ButtonGenrator";
import Range from "./Componets/Range/Range";
function App() {
  const [range, setRange] = useState(6);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);
  const [setPassword] = useState("");

  function cleanOptions() {
    setRange(0);
    setUppercase(false);
    setLowercase(false);
    setNumbers(false);
    setSpecial(false);
    setPassword("");
  }

  return (
    <>
      <h1>Password Generator with React</h1>
      <p>--------------------------------------------------</p>
      <div className="container">
        <div className="options">
          <div className="range">Characters range: {range}</div>
          <div className="range-input">
            <Range min={6} max={32} state={range} setState={setRange} />
          </div>

          <Checkbox
            nameCheck={"Uppercase"}
            state={uppercase}
            setState={setUppercase}
          />

          <Checkbox
            nameCheck={"Lowercase"}
            state={lowercase}
            setState={setLowercase}
          />

          <Checkbox
            nameCheck={"Numbers"}
            state={numbers}
            setState={setNumbers}
          />

          <Checkbox
            nameCheck={"Special"}
            state={special}
            setState={setSpecial}
          />
        </div>

        <div className="buttons">
          <ButtonGenerator
            idButton={"generator"}
            nameButton={"Generator"}
            rangeState={range}
            uppercaseState={uppercase}
            lowercaseState={lowercase}
            numbersState={numbers}
            specialState={special}
            // this buttons has the logic for generating the password
            // and should return the generated password to the field on top
          />
          <Button
            idButton={"clear"}
            onClickButton={cleanOptions}
            nameButton={"Clear Options"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
