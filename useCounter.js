import { useState } from "react"

export const useCounter = (initialValue = 10) =>{

    const [counter, setCounter] = useState(initialValue);

    const add = () => {
        if (counter === 20) return 
        setCounter(counter +1 )
    }

    const decrement = () => {
        if (counter === 0) return
        setCounter(counter-1)
    }

    const reset = () => setCounter(initialValue);

    return{
        counter,
        add,
        decrement,
        reset,
    }
}
