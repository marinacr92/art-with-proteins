import '../styles/Splash.scss';
import watercolor from '../images/watercolor.png';

const Splash = () => {
  return (
    <>
      <section className="splash">
        <div className="splash-container">
          <h1 className="splash-title">Art with Proteins</h1>
          <img className="splash-watercolor" alt="" src={watercolor} />
        </div>
      </section>
    </>
  );
};

export default Splash;
