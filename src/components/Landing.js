import '../styles/Landing.scss';
import { useState } from 'react';
import LandingPreview from './LandingPreview';

const Landing = () => {
  const [protein, setProtein] = useState('');
  const [arrayProtein, setArrayProtein] = useState([]);
  const [proteinName, setProteinName] = useState('');

  const handleWriteProtein = (ev) => {
    setProtein(ev.target.value);
  };

  const paintProtein = () => {
    const breakProt = protein.toLowerCase().split('');
    setArrayProtein(breakProt);
  };

  const saveProtName = (ev) => {
    setProteinName(ev.target.value);
  };

  return (
    <>
      <form className="form">
        <label className="form-label">Introduce tu proteína</label>
        <textarea
          className="form-textarea"
          cols="30"
          rows="10"
          onInput={handleWriteProtein}
          value={protein}
        ></textarea>
        <label className="form-label">¿Cuál es el nombre de tu proteína?</label>
        <input
          type="text"
          className="form-input"
          onChange={saveProtName}
          value={proteinName}
        />
      </form>
      <button className="button" onClick={paintProtein}>
        Frikear
      </button>
      <section>
        <LandingPreview
          arrayProtein={arrayProtein}
          proteinName={proteinName}
        ></LandingPreview>
      </section>
    </>
  );
};

export default Landing;
