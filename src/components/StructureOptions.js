const StructureOptions = ({
  selectStructure,
  structure,
  menu,
  checkedInfo,
  checkedPrint,
}) => {
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
        <h2 className="form-legend_title">Forma</h2>
      </legend>
      <div className="structure-options">
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="oval"
          onChange={selectStructure}
          checked={structure === 'oval'}
        />
        <label className="form-label">Óvalo</label>
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="sfere"
          onChange={selectStructure}
        />
        <label className="form-label">Círculo</label>
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="square"
          onChange={selectStructure}
        />
        <label className="form-label">Cuadrado</label>
        <input
          type="radio"
          name="structure"
          className="input-radio"
          value="semi-square"
          onChange={selectStructure}
        />
        <label className="form-label">Cuadrado redondeado</label>
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
