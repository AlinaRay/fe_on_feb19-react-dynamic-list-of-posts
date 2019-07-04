import React from 'react';

export default function SearchField({searchFieldType, searchFieldValue, updateSearchFieldsValue}) {
    return (
        <label
            className='label'>
            Filter by {searchFieldType}
            <input
                className='input'
                type='search'
                name={searchFieldType}
                value={searchFieldValue}
                onChange={updateSearchFieldsValue}
                autoComplete='off'
            />
        </label>
    )
};

