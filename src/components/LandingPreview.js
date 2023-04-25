import '../styles/LandingPreview.scss';

const groupArr = (data, n) => {
  const group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
};

const LandingPreview = ({ arrayProtein, proteinName, structure, gaps }) => {
  const groupProtein = groupArr(arrayProtein, gaps === 'group-and-gap' ? 5 : 0);
  const groupAminoacid = groupProtein.map((eachArray) => {
    const aminoacid = eachArray.map((eachAA, index) => {
      return (
        <li
          key={index}
          className={`${structure}-structure ${eachAA} ${gaps}`}
        ></li>
      );
    });
    return (
      <li className="group">
        <ul>{aminoacid}</ul>
      </li>
    );
  });

  return (
    <>
      <ul className="aa-list">{groupAminoacid}</ul>
      <p>{proteinName}</p>
    </>
  );
};

export default LandingPreview;
