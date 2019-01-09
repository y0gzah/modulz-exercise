import React from 'react';

// Search input component (stateless)
const SearchInput = ({ value, onChange, label }) =>
    <form>
        {label}: <input
            type="text"
            value={value}
            onChange={onChange}
            className="search-input" />
    </form>

export default SearchInput;
