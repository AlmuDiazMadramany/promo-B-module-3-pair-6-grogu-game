import { useState } from "react"
import "../styles/App.scss"
import Board from "./Board";
import Header from "./Header";

function App() {

  const [grogu, setGrogu] = useState(0);
  const [cookie, setCookie] = useState(["🍪", "🍪", "🍪"]);
  const [egg, setEgg] = useState(["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [gameStatus, setGameStatus] = useState("");

  const getRandomNumber = max => 
    Math.ceil(Math.random() * max);

  /*generar num aleatorio
    con el num aleatorio, condicional
    */
  function rollDice(){
    const randomNumber = getRandomNumber(4);
    console.log(randomNumber);
    if(randomNumber === 4){
      //Grogu avanza una casilla
      setGrogu(grogu+1);
      //Mensaje [gameStatus]: Grogu avanza una casilla
      setGameStatus('Grogu avanza una casilla');
    }else if(randomNumber === 3){
      //Se quita una galleta
      setCookie(cookie.slice(1));
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [una galleta]
      setGameStatus('[Nombre usuario] has ayudado a Mando a recoger [una galleta]');
    }else if(randomNumber === 2){
      //Se quita un huevo
      setEgg(egg.slice(1));
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [un huevo]
      setGameStatus('[Nombre usuario] has ayudado a Mando a recoger [un huevo]');
    }else{
      //Se quita una rana
      setFrog(frog.slice(1));
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [una rana]
      setGameStatus('[Nombre usuario] has ayudado a Mando a recoger [una rana]');
    };
  };
  
  const handleClick = () => {
    rollDice();
  };

  return (
    <>
    <Header/>
    <main className="page">
      <Board/>

      <section>
        <button className="dice" onClick={handleClick}>Lanzar Dado</button>
        <div className="game-status">{gameStatus || 'En curso'}</div>
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
