//import { useState } from "react"
import "../styles/App.scss"

function App() {

  /*const [grogu, setGrogu] = useState(0);
  const [cookie, setCookie] = useState(["🍪", "🍪", "🍪"]);
  const [egg, setEgg] = useState(["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [gameStatus, setGameStatus] = useState("En curso");*/

  const getRandomNumber = (max) => {
    Math.ceil(Math.random() * max);
  }
  const handleClick = () => {
    const randomNumber = getRandomNumber(4);

    console.log(randomNumber)
    /*generar num aleatorio
    con el num aleatorio, condicional
    */
  }

  return (
    <>
     <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice" onClick={handleClick}>Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>

    </>
  
  )
}

export default App
