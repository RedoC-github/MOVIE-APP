import React from 'react';
import Codebox from './Codebox';

const codeList = [
    "npm run start",
    "npm run build",
    "npm run test",
    "npm run eject"
];

function App() {
    return (
        <div>
            {codeList.map(codelists => (
                <Codebox code={codelists}/>
            ))}
        </div>
    );
}

export default App;
