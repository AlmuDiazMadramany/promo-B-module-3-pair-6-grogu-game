
import '../styles/Board.scss';
import Grogu from './Grogu';

function Board({grogu}) {

  const cells = Array(7).fill(null)
  const cellsHTML = cells.map ((cell, indice)=> <div key={indice}className="cell"> 
    {
      grogu === indice ? <Grogu/> : null
    }
  </div>)
  


  return (
    <section className="board">
        {cellsHTML}
      </section>
  )
}

export default Board