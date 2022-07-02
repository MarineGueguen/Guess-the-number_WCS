import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from "./Form"

const Play = ({number, round, setRound}) => {
    let navigate = useNavigate()
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')

    const updateRound = () => {
        setRound(round + 1)
    }

    const checkNumber = () => {
       if (parseInt(value) === number) return true
    }

    const redirectToCongratulation = () => { 
        navigate("/congratulation", { replace: true })
    }

    const results = () => {
            if (value > number) {
                setMessage(<p><span>The number is lower than {value}.</span></p>) 
            } else {
                setMessage(<p><span>The number is greater than {value}.</span></p>)
            }
    }

    const onClick = () => {
        updateRound()
        if (checkNumber()) {
            redirectToCongratulation()
        }
        results()
        setValue(0)
    }

    return (
        <>
            { round == 0 ?
            <h2>Enter your number</h2> :
            <div>
                <h2>Wrong, guess again!</h2>
                {message}
            </div> }
            <p>Round n°{round}</p>
            <Form value={value} setValue={setValue} onClick={onClick} />
        </>
    )
}

export default Play
