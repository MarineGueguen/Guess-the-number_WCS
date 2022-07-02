const Form = ({value, setValue, onClick, ...props}) => {
    const onChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Choose your number : </label>
                <input 
                placeholder={value}
                type='number'
                onChange={onChange}
                value={value}
            />
            <button type="submit" onClick={onClick}>Try it!</button>
        </form>
        </>
    )
}

export default Form