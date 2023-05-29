import '../styles/Sidebar.scss';
import '../styles/Print.scss';
import { useState } from 'react';
import StructureOptions from './StructureOptions';
import GapsOptions from './GapsOptions';
import InfoProt from './InfoProt';

const Sidebar = ({
  defaultSequence,
  proteinSequence,
  proteinName,
  setGaps,
  gaps,
  selectStructure,
  structure,
  saveProtName,
  handleWriteProtein,
  checkedInfo,
  setCheckedInfo,
  //setFirstSplash,
  //afterPrint,
  //beforePrint,
  checkedPrint,
  setCheckedPrint,
}) => {
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const handleClickNone = () => {};

  const handleClickInfo = () => {
    setCheckedInfo(!checkedInfo);
    // window.onbeforeprint = beforePrint();
  };

  const handleClickPrint = () => {
    //setFirstSplash(false);
    setCheckedPrint(true);
    window.onafterprint = () => {
      console.log('After print');
      setCheckedPrint(false);
    };
    setTimeout(() => {
      window.print();
    }, 300);
    // window.print();

    // window.onafterprint = afterPrint();
  };

  return (
    <>
      <section className="sidebar">
        <section className="sidebar-nav">
          <nav className="nav">
            <ul className="nav-content">
              <li
                className={menu === true ? 'open menu-icon' : 'menu-icon'}
                style={checkedInfo === true ? { display: 'none' } : {}}
                onClick={handleClickMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </li>
              <li
                style={
                  checkedInfo === true
                    ? { display: 'none' }
                    : { gridRow: '2 / 3' }
                }
              >
                <button className="button-print" onClick={handleClickPrint}>
                  <i className="fa-solid fa-print"></i>
                </button>
              </li>
              <li style={{ gridRow: '4 / 5' }} onClick={handleClickInfo}>
                <button
                  className="button-info"
                  style={
                    checkedInfo === true
                      ? { boxShadow: 'inset 0px 4px 6px #444444' }
                      : { boxShadow: '0px 4px 6px #444444' }
                  }
                >
                  <i className="fa-solid fa-info"></i>
                </button>
              </li>
            </ul>
          </nav>
        </section>
        <section
          className={`sidebar-form ${
            menu === false || checkedInfo === true ? 'no-animation' : 'open'
          }-sidebar ${checkedPrint ? 'no-animation no-display' : ''}`}
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
              checkedInfo={checkedInfo}
              checkedPrint={checkedPrint}
            ></InfoProt>
            <StructureOptions
              selectStructure={selectStructure}
              structure={structure}
              menu={menu}
              checkedInfo={checkedInfo}
              checkedPrint={checkedPrint}
            ></StructureOptions>
            <GapsOptions
              gaps={gaps}
              setGaps={setGaps}
              menu={menu}
              checkedInfo={checkedInfo}
              checkedPrint={checkedPrint}
            ></GapsOptions>
          </form>
        </section>
        <section
          className="sidebar-leftover"
          onClick={menu === true ? handleClickMenu : handleClickNone}
        ></section>
      </section>
    </>
  );
};

export default Sidebar;
