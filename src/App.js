import React from 'react';
import Codebox from './Codebox';

function App() {
    return (
        <div>
            <Codebox code="npm run start"/>
            <Codebox code="npm run build"/>
            <Codebox code="npm run test"/>
            <Codebox code="npm run eject"/>
        </div>
    );
}

export default App;
