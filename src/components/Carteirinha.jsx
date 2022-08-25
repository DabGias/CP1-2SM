import "../css/Carteirinha.css"

function Carteirinha() {
    return(
        <>
            <form className="formCarteirinha">
                <label className="labelForm">Foto </label>
                <input type={"file"} className="inputForm"/>

                <label className="labelForm">Nome </label>
                <input type={"text"} className="inputForm"/>

                <label className="labelForm">RM </label>
                <input type={"number"} className="inputForm" min={1}/>

                <label className="labelForm">Curso </label>
                <input type={"text"} className="inputForm"/>

                <label className="labelForm">Turma </label>
                <input type={"text"} className="inputForm"/>
            </form>
        </>
    )
}

export default Carteirinha