import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ search, onSearch }) {
    return (
        <section className="search-bar">
            <input
                type="text"
                placeholder="Cari berdasarkan judul...."
                value={search}
                onChange={onSearch}
            />
        </section>
    );
}

SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default SearchBar;