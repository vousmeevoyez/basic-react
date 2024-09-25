import React from 'react';

function Greeting({ name }) {
    return (
        <div>
            <h2 datatest-id="Greeting">Hello, {name}!</h2>
        </div>
    );
}

export default Greeting;