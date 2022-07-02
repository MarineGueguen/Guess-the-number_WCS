const Form = ({value, setValue, onClick}) => {
    const onChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Guess the number (between 0 and 100): </label>
                    <input 
                    placeholder={value}
                    type='number'
                    onChange={onChange}
                    value={value}
                />
                <button type="submit" onClick={onClick}>Let's go!</button>
            </form>
        </>
    )
}

export default Form
