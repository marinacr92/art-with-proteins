import '../styles/Sidebar.scss';
import '../styles/Print.scss';
//import menu from '../images/menu.png';
import { useState } from 'react';
//import { useState } from 'react';
import StructureOptions from './StructureOptions';
import GapsOptions from './GapsOptions';
//import SizeToPrint from './SizeToPrint';

import InfoProt from './InfoProt';

const Sidebar = ({
  defaultSequence,
  proteinSequence,
  proteinName,
  // arrayProtein,
  setGaps,
  gaps,
  selectStructure,
  structure,
  saveProtName,
  handleWriteProtein,
  // paintProtein,
}) => {
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const print = () => {
    window.print();
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
        <section className="sidebar-nav">
          <nav className="nav">
            <ul className="nav-content">
              <li
                className={menu === true ? 'open menu-icon' : 'menu-icon'}
                onClick={handleClickMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </li>
              <li style={{ gridRow: '2 / 3' }}>
                <button className="button-print" onClick={print}>
                  <i className="fa-solid fa-print"></i>
                </button>
              </li>
              <li style={{ gridRow: '4 / 5' }}>
                <button className="button-info">
                  <i class="fa-solid fa-circle-info"></i>
                </button>
              </li>
            </ul>
          </nav>
        </section>
        <section
          className={
            menu === true
              ? 'sidebar-form open-sidebar'
              : 'sidebar-form close-sidebar'
          }
        >
          <form
            className="form"
            style={menu === true ? { display: 'flex' } : { display: 'none' }}
          >
            <InfoProt
              defaultSequence={defaultSequence}
              handleWriteProtein={handleWriteProtein}
              proteinSequence={proteinSequence}
              proteinName={proteinName}
              saveProtName={saveProtName}
              menu={menu}
            ></InfoProt>
            <StructureOptions
              selectStructure={selectStructure}
              structure={structure}
              menu={menu}
            ></StructureOptions>
            <GapsOptions
              gaps={gaps}
              setGaps={setGaps}
              menu={menu}
            ></GapsOptions>
          </form>
        </section>
        <section
          className="sidebar-leftover"
          onClick={menu === true ? handleClickMenu : ''}
        ></section>
      </section>
    </>
  );
};

export default Sidebar;
