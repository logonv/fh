import React from "react";
// import Input from "@mui/material/Input";
// import { InputAdornment, Paper } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { useState } from "react";
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
                // InputProps={{
                //     startAdornment: (

                //         <InputAdornment position="start" >
                //             {" "}
                //             <SearchIcon  />
                //         </InputAdornment>

                //     ),
                // }}
                placeholder="search album names"
                onChange={searchBarChange}
            />
            {/* <Button>
              Search
            </Button>
            */}
        </div>
    );
};

export default SearchBar;
