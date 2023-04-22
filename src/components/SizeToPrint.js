const SizeToPrint = ({ selectSizeToPrint, size }) => {
  return (
    <select name="" id="" value={size} onChange={selectSizeToPrint}>
      <option value="A4">A4</option>
      <option value="A3">A3</option>
    </select>
  );
};

export default SizeToPrint;
