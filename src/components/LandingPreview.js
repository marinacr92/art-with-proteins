import '../styles/LandingPreview.scss';

const LandingPreview = ({ arrayProtein, proteinName }) => {
  const aminoacid = arrayProtein.map((eachAA, index) => {
    return <li key={index} className={`structure ${eachAA}`}></li>;
  });

  return (
    <>
      <ul className="aa-list">{aminoacid}</ul>
      <p>{proteinName}</p>
    </>
  );
};

export default LandingPreview;
