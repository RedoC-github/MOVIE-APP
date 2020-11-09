import React from 'react'

// react property test
function Codebox({ code }) {     // props.code == { code }
    return (
        <div>
            <code>{code}</code>
        </div>
    );
}

export default Codebox;
