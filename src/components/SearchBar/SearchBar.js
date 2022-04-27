import React from "react";
import Input from "@mui/material/Input";
import { InputAdornment, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { TextField, IconButton, Button } from "@mui/material";


const SearchBar = ({searchValue, setSearchValue}) => {

    const searchBarChange = (e) => {
      setSearchValue(e.target.value)


    }

    return (

        <div >
            <TextField
                value={searchValue}
                // InputProps={{
                //     startAdornment: (

                //         <InputAdornment position="start" >
                //             {" "}
                //             <SearchIcon  />
                //         </InputAdornment>

                //     ),
                // }}
                placeholder="search"
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
