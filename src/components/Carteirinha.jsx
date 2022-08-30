import {useState} from "react"
import "../css/Carteirinha.css"
import perfil1 from "../img/face1.png"
import perfil2 from "../img/face2.png"
import perfil3 from "../img/face3.png"
import perfil4 from "../img/star.png"

function Carteirinha(props) {
    const [carteirinha, setCarteirinha] = useState({'nome' : '', 'rm' : '', 'curso' : '', 'turma' : ''})

    const mostrarCarteirinha = (e) => {
        const {name, value} = e.target

         if (name === 'nome') {
            setCarteirinha({'nome' : value, 
            'rm' : carteirinha.rm, 
            'curso' : carteirinha.curso,
            'turma' : carteirinha.turma})
        } else if (name === 'rm') {
            setCarteirinha({'nome' : carteirinha.nome, 
            'rm' : value, 
            'curso' : carteirinha.curso,
            'turma' : carteirinha.turma})
        } else if (name === 'curso') {
            setCarteirinha({'nome' : carteirinha.nome, 
            'rm' : carteirinha.rm, 
            'curso' : value,
            'turma' : carteirinha.turma})
        } else if (name === 'turma') {
            setCarteirinha({'nome' : carteirinha.nome, 
            'rm' : carteirinha.rm, 
            'curso' : carteirinha.curso,
            'turma' : value})
        }
    }

    return(
        <>
            <div className="divOutput">
                <p className="output">Foto:</p>
                <img src={perfil1} alt="Imagem" className={"foto"}/>
                <p className="output">Nome: {props.alunos[0].nome}</p>
                <p className="output">RM: {props.alunos[0].rm}</p>
                <p className="output">Curso: {props.alunos[0].curso}</p>
                <p className="output">Turma: {props.alunos[0].turma}</p>
            </div>

            <div className="divOutput">
                <p className="output">Foto:</p>
                <img src={perfil2} alt="Imagem" className={"foto"}/>
                <p className="output">Nome: {props.alunos[1].nome}</p>
                <p className="output">RM: {props.alunos[1].rm}</p>
                <p className="output">Curso: {props.alunos[1].curso}</p>
                <p className="output">Turma: {props.alunos[1].turma}</p>
            </div>

            <div className="divOutput">
                <p className="output">Foto:</p>
                <img src={perfil3} alt="Imagem" className={"foto"}/>
                <p className="output">Nome: {props.alunos[2].nome}</p>
                <p className="output">RM: {props.alunos[2].rm}</p>
                <p className="output">Curso: {props.alunos[2].curso}</p>
                <p className="output">Turma: {props.alunos[2].turma}</p>
            </div>

            <form className="formCarteirinha">
                <label className="labelForm">Nome</label>
                <input type={"text"} className="inputForm" name='nome' onChange={mostrarCarteirinha}/>

                <label className="labelForm">RM</label>
                <input type={"number"} className="inputForm" min={1} name='rm' onChange={mostrarCarteirinha}/>

                <label className="labelForm">Curso</label>
                <input type={"text"} className="inputForm" name='curso' onChange={mostrarCarteirinha}/>

                <label className="labelForm">Turma</label>
                <input type={"text"} className="inputForm" name='turma' onChange={mostrarCarteirinha}/>
            </form>

            <div className="divOutput">
                <p className="output">Foto:</p>
                <img src={perfil4} alt="Imagem" className={"foto"}/>
                <p className="output">Nome: {carteirinha.nome}</p>
                <p className="output">RM: {carteirinha.rm}</p>
                <p className="output">Curso: {carteirinha.curso}</p>
                <p className="output">Turma: {carteirinha.turma}</p>
            </div>
        </>
    )
}

export default Carteirinha