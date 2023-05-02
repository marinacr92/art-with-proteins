const StructureOptions = ({ selectStructure, structure }) => {
  return (
    <fieldset className="form-fieldset  structure-options">
      <legend className="form-legend">
        <h2 className="form-legend_title">Elige la forma</h2>
      </legend>
      <div className="input-radio_group">
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="oval"
          onChange={selectStructure}
          checked={structure === 'oval'}
        />
        <label className="form-label">Ovalada</label>
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="sfere"
          onChange={selectStructure}
        />
        <label className="form-label">Esfera</label>
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="square"
          onChange={selectStructure}
        />
        <label className="form-label">Cuadrada</label>
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="semi-square"
          onChange={selectStructure}
        />
        <label className="form-label">Cuadrada-redondeada</label>
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="triangle"
          onChange={selectStructure}
        />
        <label className="form-label">Triángulo</label>
      </div>
    </fieldset>
  );
};

export default StructureOptions;