/* eslint-disable react/prop-types */
const Range = ({ min, max, state, setState }) => {

    const handleChange = (e) => {
      setState(e.target.value);
    };
  
    return (
      <input type="range" min={min} max={max} value={state} onChange={handleChange} />
    );
  };

  export default Range;
