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
  //const [firstSplash, setFirstSplash] = useState(false);

  // useEffect(() => {
  //   setFirstSplash(true);
  // }, []);

  //const afterPrint = () => {
  //setCheckedPrint(false);
  //};

  //const beforePrint = () => {
  // setFirstSplash(true);
  //};

  const handleWriteProtein = (ev) => {
    setProteinSequence(ev.target.value);
  };

  const saveProtName = (ev) => {
    setProteinName(ev.target.value);
  };

  const selectStructure = (ev) => {
    setStructure(ev.target.value);
  };

  // useEffect(() => {
  //   console.log('checkedPrint', false);
  // }, [checkedPrint]);

  return (
    <>
      {/* {firstSplash === true ? <Splash></Splash> : ''} */}
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
        //setFirstSplash={setFirstSplash}
        //afterPrint={afterPrint}
        //beforePrint={beforePrint}
        checkedPrint={checkedPrint}
        // setCheckedPrint={(isChecked) => {
        //   console.log('setCheckedPrint', isChecked);
        //   setCheckedPrint(isChecked);
        //}}
        setCheckedPrint={setCheckedPrint}
      />
      <section
        className="body-of-body"
        // style={
        //   checkedPrint === true
        //     ? { backgroundColor: 'black' }
        //     : { backgroundColor: 'transparent' }
        //}
      >
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
