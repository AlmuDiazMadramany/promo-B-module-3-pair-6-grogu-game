import { useEffect, useState } from "react"
import "../styles/App.scss"
// import Board from "./Board";
import Header from "./Header";
// import Dice from "./Dice";
// import Form from "./Form";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";

import Options from "./Options";
import Home from "./Home";
import Instructions from "./Instructions";

function App() {

  const [grogu, setGrogu] = useState(0);
  const [cookie, setCookie] = useState(["🍪", "🍪", "🍪"]);
  const [egg, setEgg] = useState(["🥚", "🥚", "🥚"]);
  const [frog, setFrog] = useState(["🐸", "🐸", "🐸"]);
  const [gameStatus, setGameStatus] = useState("");
  const [name, setName] = useState('');

  useEffect (()=> {
    
    if(grogu === 6 && cookie.length !== 0 && egg.length !== 0 && frog.length !== 0) {
      return setGameStatus('¡¡Grogu se ha comido el cargamento!! Has perdido')
    }else if(grogu !== 6 && cookie.length === 0 && egg.length === 0 && frog.length === 0){
      return setGameStatus('Ganaste, Mando completa la misión')
    }


  }, [grogu, cookie, egg, frog])



  /*generar num aleatorio
    con el num aleatorio, condicional
    */
  const getRandomNumber = max => 
    Math.ceil(Math.random() * max);

  function rollDice(){
    const randomNumber = getRandomNumber(4);
    if(randomNumber === 4){
      //Grogu avanza una casilla
      setGrogu(grogu+1);
      //Mensaje [gameStatus]: Grogu avanza una casilla
      setGameStatus('Grogu avanza una casilla');
    }else if(randomNumber === 3){
      //Se quita una galleta
      console.log(cookie.length)
      if(cookie.length > 0){
      setCookie(cookie.slice(1));
      setGameStatus(`${name} has ayudado a Mando a recoger una 🍪`);} 
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [una galleta]
      
    }else if(randomNumber === 2){
      //Se quita un huevo
      if(egg.length > 0){
      setEgg(egg.slice(1));
      setGameStatus(`${name} has ayudado a Mando a recoger un 🥚`);}
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [un huevo]
      
    }else{
      //Se quita una rana
      if(frog.length > 0){
      setFrog(frog.slice(1));
      setGameStatus(`${name} has ayudado a Mando a recoger una 🐸`);}
      //Mensaje [gameStatus]: [Nombre usuario] has ayudado a Mando a recoger [una rana]
      
    };
  };

  const newName = (value) =>{
    setName(value);
  }

  return (
    <>
    <Header name={name}/>
    

    <main className="page">
      
      {/* <Form newName={newName}/>
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
      </section> */}

      <Routes>
      <Route path="/" element= {<Home newName={newName} grogu={grogu} rollDice={rollDice} gameStatus={gameStatus} cookie={cookie} egg={egg} frog={frog}/>}/>
      <Route path="/instructions" element = {<Instructions/>}/>
  
        <Route path="/options" element= {<Options/>}/>
      </Routes>

    </main>

    <Footer/>
    </>
  
  )
}

export default App
