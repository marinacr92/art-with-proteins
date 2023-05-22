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
}) => {
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const handleClickInfo = () => {
    setCheckedInfo(!checkedInfo);
  };

  const handleClickPrint = () => {
    window.print();
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
          className={
            menu === false || checkedInfo === true
              ? 'sidebar-form close-sidebar'
              : 'sidebar-form open-sidebar'
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
              checkedInfo={checkedInfo}
            ></InfoProt>
            <StructureOptions
              selectStructure={selectStructure}
              structure={structure}
              menu={menu}
              checkedInfo={checkedInfo}
            ></StructureOptions>
            <GapsOptions
              gaps={gaps}
              setGaps={setGaps}
              menu={menu}
              checkedInfo={checkedInfo}
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
