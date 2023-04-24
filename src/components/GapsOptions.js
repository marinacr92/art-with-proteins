const GapsOptions = ({ gaps, setGaps }) => {
  const selectGaps = (ev) => {
    setGaps(ev.target.value);
  };

  return (
    <fieldset className="fieldset gaps-options">
      <legend className="legend">
        <h2 className="legend-title">Elige la distribución</h2>
      </legend>
      <select name="" id="" onChange={selectGaps} value={gaps}>
        <option value="no-gap">Sin huecos</option>
        <option value="full-gap">Huecos entre todos aa</option>
        <option value="group-and-gap">Huecos cada 4 aa</option>
      </select>
    </fieldset>
  );
};

export default GapsOptions;
