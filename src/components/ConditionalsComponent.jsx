import { useState } from 'react';


const ConditionalComponent = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [ buttonMessage, setButtonMessage ] = useState('Show Details');
    

    const handleClick = () => {
        let newDetailState = !showDetails;

        if (showDetails === false){
            setButtonMessage('Show Details');

        }else{
            setButtonMessage('Hide Details');
        }

        setShowDetails(newDetailState);
    }

    return (
        <div>
             <h1>Ternary Component</h1>
            <button onClick={() => {handleClick()}}>{buttonMessage}</button>
            {
                showDetails
                &&
                <div>
                    <h1>Showing details...</h1>
                </div>
                    
            }
        
        
        </div>
    )
}

export default ConditionalComponent;