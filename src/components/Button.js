import { useNavigate } from "react-router-dom"
import { randomRange } from "../utils/random"

const Button = ({setRound, ...props}) => {
    let navigate = useNavigate()

    const numberRandomizer = () => {
        props.setNumber((randomRange(0,100)))
    }

    const resetRound = () => {
        setRound(0)
    }

    const redirectToPlay = () => { 
        navigate("/play", { replace: true })
    }

    const onClick = () => {
        resetRound()
        numberRandomizer()
        redirectToPlay()
    }

    return (
        <button onClick={onClick}>{ props.action }</button>
    )
}

export default Button
