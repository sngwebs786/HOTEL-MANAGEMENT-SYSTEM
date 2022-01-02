import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const defaultFilters = [
    {
        value: 'Price',
        label: 'By Price',
    },
    {
        value: 'Room',
        label: 'By no. of rooms',
    },
];

const SearchRoom = () => {
    const [filters, setFilters] = React.useState('None');

    const handleChange = (event) => {
        setFilters(event.target.value);
    };
    return (
        <div>
            <h1>Search your room </h1>



            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select your filter"
                    value={filters}
                    onChange={handleChange}
                    className="selectBank"

                >
                    {defaultFilters.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>

            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
        </div>
    )
}

export default SearchRoom
