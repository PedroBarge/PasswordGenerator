// eslint-disable-next-line react/prop-types
const Button = ({ nameButton, idButton, onClickButton }) => {
  return (
    <button id={idButton} onClick={onClickButton}>
      {nameButton}
    </button>
  );
};
export default Button;
