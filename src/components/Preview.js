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

const Preview = ({ proteinSequence, proteinName, structure, gaps }) => {
  const arrayProtein = proteinSequence.toLowerCase().split('');
  const groupProtein = groupArr(arrayProtein, gaps === 'group-and-gap' ? 5 : 0);
  const groupAminoacid = groupProtein.map((eachArray, index) => {
    if (eachArray.length < 5) {
      for (let i = eachArray.length; i < 5; i++) {
        eachArray.push('T');
      }
    }
    const aminoacid = eachArray.map((eachAA, index) => {
      return (
        <li
          key={index}
          className={`print ${structure}-structure ${eachAA} ${gaps}`}
        >
          <Protein isTriangle={structure === 'triangle'} />
        </li>
      );
    });
    return (
      <li
        key={index}
        className="group-of-aa"
        style={
          structure === 'triangle'
            ? { marginBottom: '-15px' }
            : { marginBottom: '0px' }
        }
      >
        <ul className="aa-list">{aminoacid}</ul>
      </li>
    );
  });

  return (
    <>
      <section className="preview">
        <ul className={gaps === 'group-and-gap' ? 'preview-container' : ''}>
          {groupAminoacid}
        </ul>
        <p className="protein-name print">
          {proteinName === ''
            ? 'Synaptonemal complex central element protein 3'
            : proteinName}
        </p>
      </section>
    </>
  );
};

const Protein = ({ isTriangle }) => {
  console.log('isTriangle', isTriangle);
  return isTriangle ? <i className="fa-solid fa-play"></i> : <></>;
};

export default Preview;
