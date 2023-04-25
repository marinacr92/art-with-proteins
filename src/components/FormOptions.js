const FormOptions = ({ selectStructure }) => {
  return (
    <fieldset className="fieldset form-options">
      <legend className="legend">
        <h2 className="legend-title">Elige la forma</h2>
      </legend>
      <div className="radio-group">
        <label className="form-label">
          <input
            type="radio"
            name="structure"
            className="input-radio"
            value="oval"
            onChange={selectStructure}
          />
          Ovalada
        </label>
        <label className="form-label">
          <input
            type="radio"
            name="structure"
            className="input-radio"
            value="sfere"
            onChange={selectStructure}
          />
          Esfera
        </label>
        <label className="form-label">
          <input
            type="radio"
            name="structure"
            className="input-radio"
            value="square"
            onChange={selectStructure}
          />
          Cuadrada
        </label>
        <label className="form-label">
          <input
            type="radio"
            name="structure"
            className="input-radio"
            value="semi-square"
            onChange={selectStructure}
          />
          Cuadrada-redondeada
        </label>
        <label className="form-label">
          <input
            type="radio"
            name="structure"
            className="input-radio"
            value="triangle"
            onChange={selectStructure}
          />
          Triángulo
        </label>
      </div>
    </fieldset>
  );
};

export default FormOptions;
