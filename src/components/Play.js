import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from "./Form"

const Play = ({number, round, setRound}) => {
    let navigate = useNavigate()
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('')

    console.log({value})
    console.log({number})

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
                setMessage(<p><span>Lower than</span> {value}</p>) 
            } else {
                setMessage(<p><span>Greater than</span> {value}</p>)
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
            <h2>Enter another number</h2>
            {message}
        </div> }
        <p>round : {round}</p>
        <Form value={value} setValue={setValue} onClick={onClick} number={number} message={message} setMessage={setMessage} />
        </>
    )
}

export default Play