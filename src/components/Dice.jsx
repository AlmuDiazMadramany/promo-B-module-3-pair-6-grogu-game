import '../styles/Dice.scss';

function Dice(props) {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.rollDice();
  };

  return (
    <button className="dice" onClick={handleClick}>Lanzar Dado</button>
  )
}

export default Dice;
