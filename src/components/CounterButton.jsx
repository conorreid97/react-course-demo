const CounterButton = (props) => {

    const handleClick = () => {
        props.parentFunction();
    }

    return (
        <button onClick={() => {handleClick()}}>{props.text}</button>
    
    
    )
}

export default CounterButton;