import '../styles/Header.scss';
import watercolor from '../images/watercolor.png';

const Header = () => {
  return (
    <header className="header">
      <section className="header-container">
        <h1 className="header-title">Art with Proteins</h1>
        <img
          className="header-watercolor"
          alt="Fondo acuarela del logo de la página"
          src={watercolor}
        />
      </section>
    </header>
  );
};

export default Header;
