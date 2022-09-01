import "../css/Lampada.css"
import {useState} from "react"
import lampadaAcesa from "../img/lampadaAcesa.png"
import lampadaApagada from "../img/lampadaApagada.png"

function Lampada() {
    const [lampada, setLampada] = useState(lampadaAcesa)
    const [btnLabel, setLabel] = useState("Apaga!")

    function mudaLampada() {
        if (lampada === lampadaAcesa) {
            setLampada(lampadaApagada)
            setLabel("Acende!")
        } else {
            setLampada(lampadaAcesa)
            setLabel("Apaga!")
        }
    }

    return(
        <>
            <div className="divImgLampada">
                <img src={lampada} alt={"Imagem de lampada"}/>
            </div>
            <div className="divBtnLampada">
                <button onClick={() => mudaLampada()} className="btnLampada">{btnLabel}</button>
            </div>
        </>
    )
}

export default Lampada
