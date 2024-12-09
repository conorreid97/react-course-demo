const SelectTrueFalse = () => {

    const handleClick = (choice) => {
        console.log(choice + " selected!!");
    }

    return (
        <div>
            <button onClick={() => {handleClick(true)}}>True</button>
            <button onClick={() => {handleClick(false)}}>False</button>
            
        </div>
    ) 
}

export default SelectTrueFalse;