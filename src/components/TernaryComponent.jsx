import { useState } from 'react';


const TernaryComponent = () => {
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
               // condition under evaluation
               showDetails
               ?
               // what to render if the condition is true
               <h1>Showing Dettails</h1>
               :     
                // what to render if the condition is false
                <h1>Details Hidden</h1>
            }
        
        
        </div>
    )
}

export default TernaryComponent;