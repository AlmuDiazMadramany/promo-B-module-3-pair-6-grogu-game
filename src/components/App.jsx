import { useEffect, useState } from "react"
import "../styles/App.scss"
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Form from "./Form";

function App() {

  const [grogu, setGrogu] = useState(0);
  const [cookie, setCookie] = useState(["🍪", "🍪", "🍪"]);
  const [egg, setEgg] = useState(["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [gameStatus, setGameStatus] = useState("");
  const [name, setName] = useState('');

  useEffect (()=> {
    rollDice()
    if(grogu.length === 6 && cookie.length !== 0 && egg.length !== 0 && frog.length !== 0 ) {
      setGameStatus('¡¡Grogu se ha comido el cargamento!! Has perdido')
    }


  }, [grogu, cookie, egg, frog])



  /*generar num aleatorio
    con el num aleatorio, condicional
    */
  const getRandomNumber = max => 
    Math.ceil(Math.random() * max);

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
      setGameStatus(`${name} has ayudado a Mando a recoger una 🍪`);
    }else if(randomNumber === 2){
      //Se quita un huevo
      setEgg(egg.slice(1));
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [un huevo]
      setGameStatus(`${name} has ayudado a Mando a recoger un 🥚`);
    }else{
      //Se quita una rana
      setFrog(frog.slice(1));
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [una rana]
      setGameStatus(`${name} has ayudado a Mando a recoger una 🐸`);
    };
  };

  const newName = (value) =>{
    setName(value);
  }

  return (
    <>
    <Header name={name}/>
    <main className="page">
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
    </main>

    </>
  
  )
}

export default App
