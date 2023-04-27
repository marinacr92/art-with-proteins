import '../styles/Sidebar.scss';
//import menu from '../images/menu.png';
import { useState } from 'react';
//import { useState } from 'react';
//import FormOptions from './FormOptions';
//import GapsOptions from './GapsOptions';
//import SizeToPrint from './SizeToPrint';

//import InfoProt from './InfoProt';

const Sidebar = ({
  proteinSequence,
  proteinName,
  arrayProtein,
  setGaps,
  gaps,
  selectStructure,
  structure,
  saveProtName,
  handleWriteProtein,
  paintProtein,
}) => {
  const [menu, setMenu] = useState('false');

  const handleClickMenu = () => {
    setMenu(!menu);
  };
  // return (
  //   <>
  //     <section className="sidebar">
  //       <form className="form">
  //         <InfoProt
  //           handleWriteProtein={handleWriteProtein}
  //           proteinSequence={proteinSequence}
  //           proteinName={proteinName}
  //           saveProtName={saveProtName}
  //         ></InfoProt>
  //         <FormOptions selectStructure={selectStructure}></FormOptions>
  //         <GapsOptions setGaps={setGaps}></GapsOptions>
  //         {/* <SizeToPrint
  //           selectSizeToPrint={selectSizeToPrint}
  //           size={size}
  //         ></SizeToPrint> */}
  //       </form>
  //       <button className="button" onClick={paintProtein}>
  //         Frikear
  //       </button>
  //     </section>
  //   </>
  // );
  return (
    <>
      <section className="sidebar">
        <nav className="nav_bar">
          <ul className="nav_bar-content">
            <li
              className={menu === true ? 'open menu-icon' : 'menu-icon'}
              onClick={handleClickMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>Botón frikear</li>
            <li>Botón imprimir</li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Sidebar;
