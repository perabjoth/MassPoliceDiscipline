import React from 'react';

function SearchBar({ onSearch }) {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by name, agency, or allegation type..."
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
