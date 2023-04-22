import '../styles/LandingPreview.scss';

const LandingPreview = ({ arrayProtein, proteinName, structure, gaps }) => {
  const aminoacid = arrayProtein.map((eachAA, index) => {
    return (
      <li
        key={index}
        className={`${structure}-structure ${eachAA} ${gaps}`}
      ></li>
    );
  });

  return (
    <>
      <ul className="aa-list">{aminoacid}</ul>
      <p>{proteinName}</p>
    </>
  );
};

export default LandingPreview;
