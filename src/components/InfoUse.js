import '../styles/InfoUse.scss';
import '../styles/Preview.scss';

const InfoUse = () => {
  const aaList = [
    'A',
    'R',
    'N',
    'D',
    'C',
    'Q',
    'E',
    'G',
    'H',
    'I',
    'L',
    'K',
    'M',
    'F',
    'P',
    'S',
    'T',
    'W',
    'Y',
    'V',
  ];

  const paintAa = aaList.map((eachAA, index) => {
    return (
      <li key={index} className="info-caption_element">
        <i className={`info-caption_dot ${eachAA.toLowerCase()}`}></i>
        <span className="info-caption_aa">{eachAA}</span>
      </li>
    );
  });

  return (
    <>
      <div className="info-title_container">
        <h1 className="info-title">Información de uso de la página</h1>
      </div>
      <div className="info-description_container">
        <h2 className="info-description">¡Bienvenid@s querid@s bio-frikis!</h2>
        <p className="info-description">
          Si siempre has querido tener un cuadro con tu proteína favorita, esta
          página es para tí. Utilizando el menú de la izquierda, podrás acceder
          a un formulario en el que introducir el nombre de tu proteína y su
          secuencia. Además, podrás elegir la forma esquemática de los
          aminoácidos y la distribución de éstos. A medida que vayas haciendo
          cambios en el formulario, éstos aparecerán en la pantalla. Los colores
          asignados a cada aminoácido son los que aparecen en la leyenda.
          <div className="info-caption_container">
            <ul className="info-caption">{paintAa}</ul>
          </div>
        </p>
        <p className="info-description">
          Una vez estés content@ con el resultado, presiona el botón de la
          impresora. Éste abrirá las opciones de impresión donde podrás jugar
          con la escala, los márgenes, la orientación de la página y el tamaño
          de la misma para terminar de diseñar tu cuadro. Cuando lo tengas todo,
          ¡a imprimir y disfrutar!
        </p>
      </div>
    </>
  );
};

export default InfoUse;
