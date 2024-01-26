import React, { useState } from 'react';

export default function ChallengeForm() {
    const [inputValue, setInputValue] = useState("");
    const [displayMessage, setDisplayMessage] = useState('');   

    const handleChallenge = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayMessage(`You submitted: ${inputValue}`);
    };

    return (
        <div>
            <p>{displayMessage}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Type:
                    <input type='text' value={inputValue} onChange={handleChallenge} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
