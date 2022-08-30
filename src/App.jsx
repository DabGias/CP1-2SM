import "./css/App.css"
import Lampada from "./components/Lampada"
import Carros from "./components/Carros"
import Carteirinha from "./components/Carteirinha"

function App() {
    const carros = ["Ford", "FIAT", "Chevrolet", "Toyota", "Honda", "Rolls Royce", "Porsche", "Volkswagen", "Ferrari", "Jeep"]
    const carteira1 = {'nome' : 'João', 'rm' : '1111', 'curso' : 'ADS', 'turma' : '1TDSPJ'}
    const carteira2 = {'nome' : 'Pedro', 'rm' : '2222', 'curso' : 'CC', 'turma' : '1CCPI'}
    const carteira3 = {'nome' : 'Carla', 'rm' : '3333', 'curso' : 'BD', 'turma' : '1BDKY'}
    const alunos = [carteira1, carteira2, carteira3]

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
            <Carteirinha alunos={alunos}/>
        </>
    )
}

export default App