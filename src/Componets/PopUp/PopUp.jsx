/* eslint-disable react/prop-types */

const PopUp = ({ title, content, onConfirm }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onConfirm}>Copy password</button>
      </div>
    </div>
  );
};

export default PopUp;
