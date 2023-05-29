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
  const [checkedInfo, setCheckedInfo] = useState(false);
  const [checkedPrint, setCheckedPrint] = useState(false);

  const handleWriteProtein = (ev) => {
    setProteinSequence(ev.target.value);
  };

  const saveProtName = (ev) => {
    setProteinName(ev.target.value);
  };

  const selectStructure = (ev) => {
    setStructure(ev.target.value);
  };

  return (
    <>
      <Splash />
      <Sidebar
        defaultSequence={defaultSequence}
        proteinSequence={proteinSequence}
        proteinName={proteinName}
        setGaps={setGaps}
        selectStructure={selectStructure}
        saveProtName={saveProtName}
        handleWriteProtein={handleWriteProtein}
        structure={structure}
        gaps={gaps}
        checkedInfo={checkedInfo}
        setCheckedInfo={setCheckedInfo}
        checkedPrint={checkedPrint}
        setCheckedPrint={setCheckedPrint}
      />
      <section className="body-of-body">
        <Header></Header>
        <main className="main">
          {checkedInfo === true ? (
            <section className="info">
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
