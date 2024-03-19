/* eslint-disable react/prop-types */
const Checkbox = ({ nameCheck, state, setState }) => {
  const handleChange = () => {
    setState(!state);
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={state} 
        onChange={handleChange}
      />
      <label>{nameCheck}</label>
    </div>
  );
};

export default Checkbox;
