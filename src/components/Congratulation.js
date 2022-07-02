import Button from "./Button"

const Congratulation = (props) => {
    return (
        <>
        <h1>Congratulation, you won!!</h1>
        <h2>You've found {props.number} in {props.round} round{ props.round > 1 ? "s" : ""}.</h2>
        <Button action="Play again?" number={props.number} setNumber={props.setNumber} setRound={props.setRound} />
        </>
    )
}

export default Congratulation
