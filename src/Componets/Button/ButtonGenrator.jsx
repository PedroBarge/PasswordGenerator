/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

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

  function copyPassword() {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  }
  const onClickButton = () => {
    if (!uppercaseState && !lowercaseState && !numbersState && !specialState) {
      alert("Please select an option and value");
      return;
    }
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
    let newPassword = "";
    for (let i = 0; i < rangeState; i++) {
      newPassword +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    setPassword(newPassword);
  };

  useEffect(() => {
    console.log(password);
    if (password !== "") {
      let yes = confirm(
        "Password: " +
          password +
          "\nPress OK to copy the password\nCancel to redone the password"
      );
      if (yes) {
        copyPassword();
      }
    }
  }, [password]);

  return (
    <button id={idButton} onClick={onClickButton}>
      {nameButton}
    </button>
  );
};

export default ButtonGenerator;
