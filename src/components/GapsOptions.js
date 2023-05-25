const GapsOptions = ({ setGaps, gaps, menu, checkedInfo, checkedPrint }) => {
  const selectGaps = (ev) => {
    setGaps(ev.target.value);
  };

  return (
    <fieldset
      className={`${
        menu === true
          ? 'form-fieldset fieldset-appears'
          : 'form-fieldset fieldset-desappears'
      } ${checkedPrint ? 'no-animation' : ''}
      `}
      style={checkedInfo === true ? { display: 'none' } : {}}
    >
      <legend className="form-legend">
        <h2 className="form-legend_title">Distribución</h2>
      </legend>
      <div className="gaps-options">
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
        <label className="form-label">En columnas</label>
      </div>
    </fieldset>
  );
};

export default GapsOptions;
