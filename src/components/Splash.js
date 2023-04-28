import '../styles/Splash.scss';
import watercolor from '../images/watercolor.png';

const Splash = () => {
  return (
    <>
      <div className="splash">
        <h1 className="splash-title">Art with Proteins</h1>
        <img className="splash-watercolor" alt="" src={watercolor} />
      </div>
    </>
  );
};

export default Splash;
