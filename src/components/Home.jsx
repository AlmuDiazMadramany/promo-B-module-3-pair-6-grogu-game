
import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";

function Home({newName, grogu, rollDice, gameStatus, cookie, egg, frog}) {
  return (
    <>
    <Form newName={newName}/>
      <Board grogu={grogu}/>

      <section>
        <Dice rollDice={rollDice}/>
        <div className="game-status">{gameStatus || 'En curso'}</div>
      </section>
      
      <section className="goods-container">
        {cookie.map((item, indice)=> <div key={indice} className="goods-item">🍪</div>)}
      </section>
      <section className="goods-container">
        {egg.map((item, indice)=> <div key={indice} className="goods-item">🥚</div>)}
      </section>
      <section className="goods-container">
        {frog.map((item, indice)=> <div key={indice} className="goods-item">🐸</div>)}
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </>
  )
}

export default Home