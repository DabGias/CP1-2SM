// import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./css/App.css"
import Lampada from "./components/Lampada"

function App() {
    return(
        <>
            <div className="nomeRm">
                <h1>Checkpoint 1</h1>

                <ul>
                    <li>Gabriel Furlaneti Dias, RM94419</li>
                </ul>
            </div>

            <Lampada/>
        </>
    )
}

export default App