// import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./css/App.css"
import Lampada from "./components/Lampada"
import Carros from "./components/Carros"

function App() {
    const carros = ["Ford", "FIAT", "Chevrolet", "Toyota", "Honda", "Rolls Royce", "Porsche", "Volkswagen", "Ferrari", "Jeep"]

    return(
        <>
            <div className="nomeRm">
                <h1>Checkpoint 1</h1>

                <ul>
                    <li>Gabriel Furlaneti Dias, RM94419</li>
                </ul>
            </div>

            <Lampada/>
            <Carros>
                <ul className="listaCarros">
                    <li>{carros[0]}</li>
                    <li>{carros[1]}</li>
                    <li>{carros[2]}</li>
                    <li>{carros[3]}</li>
                    <li>{carros[4]}</li>
                    <li>{carros[5]}</li>
                    <li>{carros[6]}</li>
                    <li>{carros[7]}</li>
                    <li>{carros[8]}</li>
                    <li>{carros[9]}</li>
                </ul>    
            </Carros>
        </>
    )
}

export default App