const InfoProt = ({
  handleWriteProtein,
  proteinSequence,
  saveProtName,
  proteinName,
}) => {
  return (
    <fieldset className="fieldset info-prot">
      <legend className="legend">
        <h2 className="legend-title">Introduce la info de la proteína</h2>
      </legend>
      <label className="form-label">¿Cuál es el nombre de tu proteína?</label>
      <input
        type="text"
        className="form-input"
        onChange={saveProtName}
        value={proteinName}
      />
      <label className="form-label">Introduce tu proteína</label>
      <textarea
        className="form-textarea"
        cols="30"
        rows="10"
        onInput={handleWriteProtein}
        value={proteinSequence}
      ></textarea>
    </fieldset>
  );
};

export default InfoProt;
