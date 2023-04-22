const Options = ({ selectStructure }) => {
  return (
    <>
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
    </>
  );
};

export default Options;
