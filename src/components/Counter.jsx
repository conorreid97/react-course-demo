import { useState } from 'react';
import CounterButton from './CounterButton';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    //const handleClick = () => {
        // Both ways work the same

        //setCount(count + 1);

        //let newCount = count + 1;
        //setCount(newCount);
        //console.log(newCount);
    //}

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    
    return(
        <div>
            <h1>Counter</h1>
            <CounterButton text='+' parentFunction={increment}/>
            <CounterButton text='-' parentFunction={decrement}/>
            <div>
                { count }

            </div>
        </div>

    )
}

export default Counter;