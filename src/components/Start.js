import Button from "./Button"

const Start = props => {

    return (
        <>
            <h1>Let's play a game !</h1>
            <Button action="Start" number={props.number} setNumber={props.setNumber} setRound={props.setRound} />
        </>
    )
}

export default Start