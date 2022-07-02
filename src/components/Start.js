import Button from "./Button"

const Start = props => {

    return (
        <div className="card">
            <Button className="btn-start" action="Start" number={props.number} setNumber={props.setNumber} setRound={props.setRound} />
        </div>
    )
}

export default Start