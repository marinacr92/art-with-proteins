import '../styles/Preview.scss';
import '../styles/Print.scss';

const groupArr = (data, n) => {
  const group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
};

const Preview = ({ arrayProtein, proteinName, structure, gaps }) => {
  const groupProtein = groupArr(arrayProtein, gaps === 'group-and-gap' ? 5 : 0);
  const groupAminoacid = groupProtein.map((eachArray, index) => {
    const aminoacid = eachArray.map((eachAA, index) => {
      return (
        <li
          key={index}
          className={`print ${structure}-structure ${eachAA} ${gaps}`}
        ></li>
      );
    });
    return (
      <li key={index} className="group-of-aa">
        <ul className="aa-list">{aminoacid}</ul>
      </li>
    );
  });

  return (
    <>
      <section className="preview">
        <ul>{groupAminoacid}</ul>
        <p className="protein-name print">
          {proteinName === ''
            ? 'Synaptonemal complex central element protein 3'
            : proteinName}
        </p>
      </section>
    </>
  );
};

export default Preview;
