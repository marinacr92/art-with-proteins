const GapsOptions = ({ setGaps, gaps }) => {
  const selectGaps = (ev) => {
    setGaps(ev.target.value);
  };

  return (
    <fieldset className="form-fieldset  gaps-options">
      <legend className="form-legend">
        <h2 className="form-legend_title">Elige la distribución</h2>
      </legend>
      <div className="input-radio_group">
        <input
          type="radio"
          name="gaps"
          className="input-radio"
          value="no-gap"
          onChange={selectGaps}
          checked={gaps === 'no-gap'}
        />
        <label className="form-label">Sin separación</label>
        <input
          type="radio"
          name="gaps"
          className="input-radio"
          value="full-gap"
          onChange={selectGaps}
        />
        <label className="form-label">Separación entre todos los aa</label>
        <input
          type="radio"
          name="gaps"
          className="input-radio"
          value="group-and-gap"
          onChange={selectGaps}
        />
        <label className="form-label">Grupos de 5 aa</label>
      </div>
    </fieldset>
  );
};

export default GapsOptions;
