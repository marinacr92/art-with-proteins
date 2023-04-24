const FormOptions = ({ selectStructure }) => {
  return (
    <fieldset className="fieldset form-options">
      <legend className="legend">
        <h2 className="legend-title">Elige la forma</h2>
      </legend>
      <input
        type="radio"
        name="structure"
        value="oval"
        onChange={selectStructure}
      />
      <label>Ovalada</label>
      <input
        type="radio"
        name="structure"
        value="sfere"
        onChange={selectStructure}
      />
      <label>Esfera</label>
      <input
        type="radio"
        name="structure"
        value="square"
        onChange={selectStructure}
      />
      <label>Cuadrada</label>
      <input
        type="radio"
        name="structure"
        value="semi-square"
        onChange={selectStructure}
      />
      <label>Cuadrada-redondeada</label>
      <input
        type="radio"
        name="structure"
        value="triangle"
        onChange={selectStructure}
      />
      <label>Triángulo</label>
    </fieldset>
  );
};

export default FormOptions;
