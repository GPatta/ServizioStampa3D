import { useState } from "react";
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';

const myMaterials = [
  {
    id: 0,
    type: '',
    color: '',
    weight: 1,
    price: 0
  },
  {
    id: 200,
    type: 'PLA+',
    color: 'black',
    weight: 1000,
    price: 25
  },
  {
    id: 299,
    type: 'PLA+',
    color: 'white',
    weight: 1000,
    price: 25
  },
  {
    id: 210,
    type: 'PLA+',
    color: 'gray',
    weight: 1000,
    price: 25
  },
  {
    id: 120,
    type: 'PLA',
    color: 'blue',
    weight: 1000,
    price: 20
  },
  {
    id: 125,
    type: 'PLA',
    color: '#DD5BFF',
    weight: 1000,
    price: 20
  },
  {
    id: 130,
    type: 'PLA',
    color: 'red',
    weight: 500,
    price: 10
  },
  {
    id: 135,
    type: 'PLA',
    color: '#FF7000',
    weight: 500,
    price: 10
  },
  {
    id: 140,
    type: 'PLA',
    color: '#FFEB00',
    weight: 500,
    price: 10
  },
  {
    id: 399,
    type: 'PLA silk',
    color: 'white',
    weight: 250,
    price: 10
  },
  {
    id: 305,
    type: 'PLA silk',
    color: 'silver',
    weight: 1000,
    price: 18
  },
  {
    id: 332,
    type: 'PLA silk',
    color: '#C34400',
    weight: 1000,
    price: 18
  },
  {
    id: 400,
    type: 'PETG',
    color: 'black',
    weight: 1000,
    price: 27
  },
  {
    id: 502,
    type: 'PETG graphite',
    color: '#505050',
    weight: 1000,
    price: 30
  },
  {
    id: 599,
    type: 'PETG gomma',
    color: 'white',
    weight: 500,
    price: 20
  },
  {
    id: 600,
    type: 'ABS',
    color: 'black',
    weight: 1000,
    price: 30
  },
  {
    id: 630,
    type: 'ABS',
    color: '#D20000',
    weight: 500,
    price: 15
  },
]

function App() {

    const [material, setMaterial] = useState(0);
    const [printNumber, setPrintNumber] = useState(1);
    const [printWeight, setPrintWeight] = useState(0);
    const [printTimeH, setPrintTimeH] = useState(0);
    const [printTimeM, setPrintTimeM] = useState(0);
    const [printSupportsRemove, setPrintSupportsRemove] = useState(0);
    const [printPostProd, setPrintPostProd] = useState(0);
  
    function filterByID(item) {
      return (item.id === material ? 1 : 0);
    }
  
    let selectedMaterial = myMaterials.filter(filterByID);
  
    return (
  
      <div>
        <Header />
        <div className="content">
          {/*
          <div>
            <h3>Hai bisogno di supporto per la progettazione o non sai come funziona la stampa 3D?</h3>
            <a className="contactButton" rel="noreferrer" href="https://www.instagram.com/idema_3d" target="_blank">Contattami</a>
          </div>
          <h3>Sai già come funziona la stampa 3D? Prosegui per una stima del preventivo</h3>
          */}
          <h3>Materiale e colore</h3>
          <ul className="materialsContainer" style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly', borderBottom: '1px solid black'}}>
            {
              myMaterials.map(materialBtn => {
                if (materialBtn.id === material && materialBtn.id !== 0)
                {
                  return (<Button key={materialBtn.id} text={materialBtn.type} color={materialBtn.color} onClick={() => setMaterial(materialBtn.id)} active={true} />);
                }
                else if (materialBtn.id !== 0)
                {
                  return (<Button key={materialBtn.id} text={materialBtn.type} color={materialBtn.color} onClick={() => setMaterial(materialBtn.id)} active={false} />);
                }
                else
                {
                  return null;
                }
              })
            }
            <h4>Altri materiali e colori solo su richiesta</h4>
          </ul>
  
          <div className="inputField" >
            <h3>Peso dell'oggetto (grammi): </h3>
            <input type="number" min="0" max="9999" size="4" placeholder="grammi" onChange={event => {setPrintWeight(event.target.value)}} ></input>
          </div>
          <div className="inputField" >
            <h3>Numero di stampe necessarie</h3>
            <input type="number" min="0" max="99" size="2" step="1" placeholder="1" onChange={event => {setPrintNumber(event.target.value)}} ></input>
          </div>
          <div className="inputField" >
            <h3>Tempo stimato di stampa</h3>
            <div className="inputTime">
              <input type="number" min="0" max="168" size="3" placeholder="ore" onChange={event => {setPrintTimeH(event.target.value)}} ></input>
              <input type="number" min="0" max="59" size="2" placeholder="min" onChange={event => {setPrintTimeM(event.target.value)}} ></input>
            </div>
          </div>
          <div className="inputField" >
            <h3>Numero di pezzi che necessitano della rimozione dei supporti</h3>
            <input type="number" min="0" max="99"  size="2" placeholder="0" onChange={event => {setPrintSupportsRemove(event.target.value)}} ></input>
          </div>
          <div className="inputField">
            <h3>Numero di pezzi che necessitano di post produzione</h3>
            <input type="number" min="0" max="99" size="2" placeholder="0" onChange={event => {setPrintPostProd(event.target.value)}} ></input>
          </div>
          
          <h2>Prezzo stimato: €{(
          ((selectedMaterial[0].price / selectedMaterial[0].weight) * (printWeight > 0 ? printWeight : 0) * 2) +
          ((printNumber > 0 ? printNumber : 0) * 0.5) +
          ((printTimeH > 0 ? printTimeH : 0) * 0.2) +
          ((printTimeM > 0 ? printTimeM : 0) * 0.0033) +
          ((printSupportsRemove > 0 ? printSupportsRemove : 0) * 0.1) +
          ((printPostProd > 0 ? printPostProd : 0) * 0.5)
          ).toFixed(2)}</h2>
  
        <div className="contacts">
            <h2>Contattami</h2>
            <a className="contactButton" rel="noreferrer" href="https://www.instagram.com/idema_3d" target="_blank"><AiOutlineInstagram /></a>
            <a className="contactButton" rel="noreferrer" href="mailto: idema3d.info@gmail.com?subject=Preventivo%20Stampa%203D" target="_blank"><AiOutlineMail /></a>
        </div>
         
  
        </div>
        <Footer />
  
      </div>
  
    );
  }
  
  const Header = () => {
    return(
      <header className="header" >
        <h1>Tariffe servizio di stampa 3D</h1>
        <h2>Inserire i dettagli della commissione per ottenere una stima del preventivo</h2>
      </header>
    )
  }
  
  const Footer = () => {
    return(
      <header className="footer">
        <ul>
          <a rel="noreferrer" href="https://www.instagram.com/idema_3d" target="_blank" >instagram.com/idema_3d</a>
          <a rel="noreferrer" href="mailto: idema3d.info@gmail.com?subject=Preventivo%20Stampa%203D" target="_blank">idema3d.info@gmail.com</a>
        </ul>
        <h2>Copyright 2021 @Gabriele Pattarozzi - All rights reserved</h2>
      </header>
    )
  }
  
  
  const Button = ({ text, color, onClick, active }) => {
    return(
      <button onClick={onClick} style={{
        cursor: 'pointer',
        width: '150px', 
        height: '45px', 
        margin: '10px 10px', 
        fontSize: '15px', 
        fontWeight: 'bold', 
        backgroundColor: color, 
        color: (color === 'black' || color === 'blue' || color === '#505050' ? 'white' : 'black'), 
        border: (active ? '3px ridge #FFC832' : '1px solid black'), 
        borderRadius: '5px',
        boxShadow: (active ? '0px 0px 20px #FFC832' : '')
      }} >{text}</button>
    )
  }
  
  export default App;