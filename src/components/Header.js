import '../styles/Header.scss';
import watercolor from '../images/watercolor.png';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Art with Proteins</h1>

      <img className="header-watercolor" alt="" src={watercolor} />
    </header>
  );
};

export default Header;
