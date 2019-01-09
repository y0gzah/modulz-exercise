import React from 'react';

// ToggleButton component (stateless)
const ToggleButton = ({ toggle, state }) =>
    <button
        className="btn btn-secondary {state ? 'active' : ''}"
        onClick={toggle}>
        {state ? 'Yes' : 'No'}
    </button>

export default ToggleButton;
