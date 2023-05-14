import '../styles/App.scss';
import '../styles/Print.scss';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Splash from './Splash';
import Preview from './Preview';
import InfoUse from './InfoUse';

function App() {
  const defaultSequence =
    'MDDADPEERNYDNMLKMLSDLNKDLEKLLEEMEKISVQATWMAYDMVVMRTNPTLAESMRRLEDAFVNCKEEMEKNWQELLHETKQRL';

  const [proteinSequence, setProteinSequence] = useState('');
  const [proteinName, setProteinName] = useState('');
  const [structure, setStructure] = useState('oval');
  const [gaps, setGaps] = useState('no-gap');
  const [checked, setChecked] = useState(false);

  const handleWriteProtein = (ev) => {
    setProteinSequence(ev.target.value);
  };

  // const paintProtein = () => {
  //   const breakProt = proteinSequence.toLowerCase().split('');
  //   setArrayProtein(breakProt);
  // };

  const saveProtName = (ev) => {
    setProteinName(ev.target.value);
  };

  const selectStructure = (ev) => {
    setStructure(ev.target.value);
  };

  // const selectSizeToPrint = (ev) => {
  //   setSize(ev.target.value);
  // };

  return (
    <>
      <Splash></Splash>
      <Sidebar
        defaultSequence={defaultSequence}
        proteinSequence={proteinSequence}
        proteinName={proteinName}
        setGaps={setGaps}
        selectStructure={selectStructure}
        saveProtName={saveProtName}
        handleWriteProtein={handleWriteProtein}
        // paintProtein={paintProtein}
        // arrayProtein={arrayProtein}
        structure={structure}
        gaps={gaps}
        checked={checked}
        setChecked={setChecked}
      />
      <section className="body-of-body">
        <Header></Header>
        <main className="main">
          {checked === true ? (
            <section className="pop-up_info">
              <InfoUse></InfoUse>
            </section>
          ) : (
            <Preview
              proteinSequence={
                proteinSequence ? proteinSequence : defaultSequence
              }
              proteinName={proteinName}
              structure={structure}
              gaps={gaps}
            ></Preview>
          )}
        </main>
      </section>
    </>
  );
}

export default App;
