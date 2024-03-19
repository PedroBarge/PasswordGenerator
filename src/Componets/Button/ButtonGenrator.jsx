/* eslint-disable react/prop-types */
import { useState } from "react";

const ButtonGenerator = ({
  nameButton,
  idButton,
  rangeState,
  uppercaseState,
  lowercaseState,
  numbersState,
  specialState,
}) => {
  const [password, setPassword] = useState("");

  const arrayUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrayLower = "abcdefghijklmnopqrstuvwxyz";
  const arrayNumber = "0123456789";
  const arraySpecial = "!@#$%^&*()_+?><:;";

  let caractersForPassword = [];

  const onClickButton = () => {
    if (uppercaseState) {
      caractersForPassword = caractersForPassword.concat(arrayUpper);
    }
    if (lowercaseState) {
      caractersForPassword = caractersForPassword.concat(arrayLower);
    }
    if (numbersState) {
      caractersForPassword = caractersForPassword.concat(arrayNumber);
    }
    if (specialState) {
      caractersForPassword = caractersForPassword.concat(arraySpecial);
    }
    let allCharacters = caractersForPassword.join("");
    let pass = "";
    for (let i = 0; i < rangeState; i++) {
      pass += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    setPassword(pass);
    console.log(password);
    alert("Password: " + password);
  };
  return (
    <button id={idButton} onClick={onClickButton}>
      {nameButton}
    </button>
  );
};
export default ButtonGenerator;
