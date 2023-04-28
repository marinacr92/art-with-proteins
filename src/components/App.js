import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Splash from './Splash';
import Preview from './Preview';

function App() {
  const [proteinSequence, setProteinSequence] = useState('');
  const [arrayProtein, setArrayProtein] = useState([
    'm',
    'd',
    'd',
    'a',
    'd',
    'p',
    'e',
    'e',
    'r',
    'n',
    'y',
    'd',
    'n',
    'm',
    'l',
    'k',
    'm',
    'l',
    's',
    'd',
    'l',
    'n',
    'k',
    'd',
    'l',
    'e',
    'k',
    'l',
    'l',
    'e',
    'e',
    'm',
    'e',
    'k',
    'i',
    's',
    'v',
    'q',
    'a',
    't',
    'w',
    'm',
    'a',
    'y',
    'd',
    'm',
    'v',
    'v',
    'm',
    'r',
    't',
    'n',
    'p',
    't',
    'l',
    'a',
    'e',
    's',
    'm',
    'r',
    'r',
    'l',
    'e',
    'd',
    'a',
    'f',
    'v',
    'n',
    'c',
    'k',
    'e',
    'e',
    'm',
    'e',
    'k',
    'n',
    'w',
    'q',
    'e',
    'l',
    'l',
    'h',
    'e',
    't',
    'k',
    'q',
    'r',
    'l',
  ]);
  const [proteinName, setProteinName] = useState(
    'Synaptonemal complex central element protein 3'
  );
  const [structure, setStructure] = useState('oval');
  const [gaps, setGaps] = useState('no-gap');
  //const [size, setSize] = useState('A4');

  const handleWriteProtein = (ev) => {
    setProteinSequence(ev.target.value);
  };

  const paintProtein = () => {
    const breakProt = proteinSequence.toLowerCase().split('');
    setArrayProtein(breakProt);
    console.log(arrayProtein);
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
      <main className="main">
        <Preview
          arrayProtein={arrayProtein}
          proteinName={proteinName}
          structure={structure}
          gaps={gaps}
        ></Preview>
      </main>
    </>
  );
}

export default App;
