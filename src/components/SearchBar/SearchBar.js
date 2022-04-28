import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchValue, setSearchValue }) => {
    const searchBarChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div style={{ width: "45%" }}>
            <TextField
                fullWidth
                value={searchValue}
                placeholder="search album names"
                onChange={searchBarChange}
            />
        </div>
    );
};

export default SearchBar;
