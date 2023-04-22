const Gaps = ({ gaps, setGaps }) => {
  const selectGaps = (ev) => {
    setGaps(ev.target.value);
  };

  return (
    <select name="" id="" onChange={selectGaps} value={gaps}>
      <option value="no-gap">Sin huecos</option>
      <option value="full-gap">Huecos entre todos aa</option>
      <option value="group-and-gap">Huecos cada 4 aa</option>
    </select>
  );
};

export default Gaps;
