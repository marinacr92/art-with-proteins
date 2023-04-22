import '../styles/LandingPreview.scss';

const LandingPreview = ({ arrayProtein, proteinName, structure }) => {
  const aminoacid = arrayProtein.map((eachAA, index) => {
    return <li key={index} className={`${structure}-structure ${eachAA}`}></li>;
  });

  return (
    <>
      <ul className="aa-list">{aminoacid}</ul>
      <p>{proteinName}</p>
    </>
  );
};

export default LandingPreview;
