import '../styles/Landing.scss';
import { useState } from 'react';
import LandingPreview from './LandingPreview';
import FormOptions from './FormOptions';
import GapsOptions from './GapsOptions';
import SizeToPrint from './SizeToPrint';
import Header from './Header';
import InfoProt from './InfoProt';

const Landing = () => {
  const [proteinSequence, setProteinSequence] = useState('');
  const [arrayProtein, setArrayProtein] = useState([]);
  const [proteinName, setProteinName] = useState('');
  const [structure, setStructure] = useState('oval');
  const [gaps, setGaps] = useState('no-gap');
  const [size, setSize] = useState('A4');

  const handleWriteProtein = (ev) => {
    setProteinSequence(ev.target.value);
  };

  const paintProtein = () => {
    const breakProt = proteinSequence.toLowerCase().split('');
    setArrayProtein(breakProt);
  };

  const saveProtName = (ev) => {
    setProteinName(ev.target.value);
  };

  const selectStructure = (ev) => {
    setStructure(ev.target.value);
  };

  const selectSizeToPrint = (ev) => {
    setSize(ev.target.value);
  };

  return (
    <>
      <Header></Header>
      <main>
        <form className="form">
          <InfoProt
            handleWriteProtein={handleWriteProtein}
            proteinSequence={proteinSequence}
            proteinName={proteinName}
            saveProtName={saveProtName}
          ></InfoProt>
          <FormOptions selectStructure={selectStructure}></FormOptions>
          <GapsOptions setGaps={setGaps} gaps={gaps}></GapsOptions>
          <SizeToPrint
            selectSizeToPrint={selectSizeToPrint}
            size={size}
          ></SizeToPrint>
        </form>
        <button className="button" onClick={paintProtein}>
          Frikear
        </button>
        <section className={size}>
          <LandingPreview
            arrayProtein={arrayProtein}
            proteinName={proteinName}
            structure={structure}
            gaps={gaps}
          ></LandingPreview>
        </section>
      </main>
    </>
  );
};

export default Landing;
