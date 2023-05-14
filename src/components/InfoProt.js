const InfoProt = ({
  defaultSequence,
  handleWriteProtein,
  proteinSequence,
  saveProtName,
  //paintProtein,
  proteinName,
  menu,
}) => {
  return (
    <fieldset
      className={
        menu === true
          ? 'form-fieldset info-prot fieldset-appears'
          : 'form-fieldset info-prot fieldset-desappears'
      }
    >
      <legend className="form-legend">
        <h2 className="form-legend_title">Introduce la info de la proteína</h2>
      </legend>
      <label className="form-label">¿Cuál es el nombre de tu proteína?</label>
      <input
        type="text"
        className="input-text"
        placeholder="Ej: Synaptonemal complex central element protein 3"
        onInput={saveProtName}
        value={proteinName}
      />
      <label className="form-label">
        Introduce la secuencia de la proteína
      </label>
      <textarea
        className="textarea"
        placeholder={`Ej: ${defaultSequence}`}
        cols="30"
        rows="10"
        onInput={handleWriteProtein}
        value={proteinSequence}
      ></textarea>
    </fieldset>
  );
};

export default InfoProt;
