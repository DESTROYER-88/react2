import React, { useState } from 'react';

export default function UsesState() {
    const [count, setCount] = useState(0);
    const [thick,setThick] =useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 25)}>Click</button>
            <p>{thick}</p>
            <button onClick={() => setThick(thick - 25)}>Click</button>
        </div>
    );
}
