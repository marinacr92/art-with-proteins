const InfoProt = ({
  handleWriteProtein,
  proteinSequence,
  saveProtName,
  proteinName,
}) => {
  return (
    <fieldset className="form-fieldset info-prot">
      <legend className="form-legend">
        <h2 className="form-legend_title">Introduce la info de la proteína</h2>
      </legend>
      <label className="form-label">¿Cuál es el nombre de tu proteína?</label>
      <input
        type="text"
        className="input-text"
        placeholder="Ej: Synaptonemal complex central element protein 3"
        onChange={saveProtName}
        value={proteinName}
      />
      <label className="form-label">
        Introduce la secuencia de la proteína
      </label>
      <textarea
        className="textarea"
        placeholder="Ej: MDDADPEERNYDNMLKMLSDLNKDLEKLLEEMEKISVQATWMAYDMVVMRTNPTLAESMRRLEDAFVNCKEEMEKNWQELLHETKQRL"
        cols="30"
        rows="10"
        onInput={handleWriteProtein}
        value={proteinSequence}
      ></textarea>
    </fieldset>
  );
};

export default InfoProt;
