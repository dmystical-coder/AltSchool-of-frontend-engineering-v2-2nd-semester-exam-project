import { useState } from 'react';

const useCount = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);
    const [value, setValue] = useState("");

    // Set Value
    const handleSetValue = (e) => {
        e.preventDefault();
        value ? setCount(Number(value)) : setCount(0);
        setValue("");
    }

    // increment count
    const incrementCount = () => {
        setCount(count + 1);
    };

    // decrement count
    const decrementCount = () => {
        setCount(count - 1);
    };

    // reset count
    const resetCount = () => {
        setCount(initialCount);
    };

    return {
        value,
        handleSetValue,
        count,
        setCount,
        setValue,
        incrementCount,
        decrementCount,
        resetCount,
    };
}

export default useCount;