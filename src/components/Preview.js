import '../styles/Preview.scss';

const groupArr = (data, n) => {
  const group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
};

const print = () => {
  window.print();
};

const Preview = ({ arrayProtein, proteinName, structure, gaps }) => {
  const groupProtein = groupArr(arrayProtein, gaps === 'group-and-gap' ? 5 : 0);
  const groupAminoacid = groupProtein.map((eachArray) => {
    const aminoacid = eachArray.map((eachAA, index) => {
      return (
        <li
          key={index}
          className={`print ${structure}-structure ${eachAA} ${gaps}`}
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
      <section className="preview">
        <ul className="aa-list">{groupAminoacid}</ul>
        <p>{proteinName}</p>
        <button className="button" onClick={print}>
          Imprimir
        </button>
      </section>
    </>
  );
};

export default Preview;
