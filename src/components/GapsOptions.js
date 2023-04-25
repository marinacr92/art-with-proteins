const GapsOptions = ({ setGaps }) => {
  const selectGaps = (ev) => {
    setGaps(ev.target.value);
  };

  return (
    <fieldset className="fieldset gaps-options">
      <legend className="legend">
        <h2 className="legend-title">Elige la distribución</h2>
      </legend>
      <div className="radio-group">
        <label className="form-label">
          <input
            type="radio"
            name="gaps"
            className="input-radio"
            value="no-gap"
            onChange={selectGaps}
          />
          Sin huecos
        </label>
        <label className="form-label">
          <input
            type="radio"
            name="gaps"
            className="input-radio"
            value="full-gap"
            onChange={selectGaps}
          />
          Huecos entre todos aa
        </label>
        <label className="form-label">
          <input
            type="radio"
            name="gaps"
            className="input-radio"
            value="group-and-gap"
            onChange={selectGaps}
          />
          Agrupar cada 5 aa
        </label>
      </div>
    </fieldset>
  );
};

export default GapsOptions;
