import Button from "./Button"

const Congratulation = (props) => {
    return (
        <>
        <h1>Congratulation, you won!! You've found {props.number} in {props.round} rounds.</h1>
        <Button action="Restart" number={props.number} setNumber={props.setNumber} setRound={props.setRound} />
        </>
    )
}

export default Congratulation