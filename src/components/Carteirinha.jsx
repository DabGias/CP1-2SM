import {useState} from "react"
import "../css/Carteirinha.css"

function Carteirinha() {
    const [carteirinha, setCarteirinha] = useState({'foto' : '', 'nome' : '', 'rm' : '', 'curso' : '', 'turma' : ''})

    const mostrarCarteirinha = (e) => {
        const {name, value} = e.target

        if (name === 'foto') {
            setCarteirinha({'foto' : value, 
            'nome' : carteirinha.nome, 
            'rm' : carteirinha.rm, 
            'curso' : carteirinha.curso,
            'turma' : carteirinha.turma})
        } else if (name === 'nome') {
            setCarteirinha({'foto' : carteirinha.foto, 
            'nome' : value, 
            'rm' : carteirinha.rm, 
            'curso' : carteirinha.curso,
            'turma' : carteirinha.turma})
        } else if (name === 'rm') {
            setCarteirinha({'foto' : carteirinha.foto, 
            'nome' : carteirinha.nome, 
            'rm' : value, 
            'curso' : carteirinha.curso,
            'turma' : carteirinha.turma})
        } else if (name === 'curso') {
            setCarteirinha({'foto' : carteirinha.foto, 
            'nome' : carteirinha.nome, 
            'rm' : carteirinha.rm, 
            'curso' : value,
            'turma' : carteirinha.turma})
        } else if (name === 'turma') {
            setCarteirinha({'foto' : carteirinha.foto, 
            'nome' : carteirinha.nome, 
            'rm' : carteirinha.rm, 
            'curso' : carteirinha.curso,
            'turma' : value})
        }
    }

    return(
        <>
            <form className="formCarteirinha">
                <label className="labelForm">Foto</label>
                <input type={"file"} className="inputForm" name='foto' onChange={mostrarCarteirinha}/>

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
                <p className="output">Foto: {carteirinha.foto}</p>
                <p className="output">Nome: {carteirinha.nome}</p>
                <p className="output">RM: {carteirinha.rm}</p>
                <p className="output">Curso: {carteirinha.curso}</p>
                <p className="output">Turma: {carteirinha.turma}</p>
            </div>
        </>
    )
}

export default Carteirinha