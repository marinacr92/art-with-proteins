import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Splash from './Splash';
//import Preview from './Preview';

function App() {
  const [proteinSequence, setProteinSequence] = useState('');
  const [arrayProtein, setArrayProtein] = useState([]);
  const [proteinName, setProteinName] = useState('');
  const [structure, setStructure] = useState('oval');
  const [gaps, setGaps] = useState('no-gap');
  //const [size, setSize] = useState('A4');

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

  // const selectSizeToPrint = (ev) => {
  //   setSize(ev.target.value);
  // };

  return (
    <>
      <Splash></Splash>
      <Header></Header>
      <main className="main">
        <Sidebar
          proteinSequence={proteinSequence}
          proteinName={proteinName}
          setGaps={setGaps}
          selectStructure={selectStructure}
          saveProtName={saveProtName}
          handleWriteProtein={handleWriteProtein}
          paintProtein={paintProtein}
          arrayProtein={arrayProtein}
          structure={structure}
          gaps={gaps}
        />
        {/* <Preview
          arrayProtein={arrayProtein}
          proteinName={proteinName}
          structure={structure}
          gaps={gaps}
        ></Preview> */}
      </main>
    </>
  );
}

export default App;
