import { Typography } from "@mui/material";
import React from "react";

import GenreRow from "../components/GenreRow/GenreRow";
// import resultsGroupByGenre from '../constants/albumsGroupByGenre'
import SearchBar from "../components/SearchBar/SearchBar";

const LandingPage = ({ resultsGroupByGenre, searchValue, setSearchValue }) => {
    console.log(resultsGroupByGenre);
    const keys = Object.keys(resultsGroupByGenre);
    console.log("keys", keys);

    return (
        <>
            <div style={{ margin: "3% 3%" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "3% 3% 3% 3%",

                    }}
                >
                    <Typography variant="h1"> FilmHub Music</Typography>
                    <SearchBar
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>
                <div>
                    {keys.map((key) => {
                        return (
                            <GenreRow
                                key={`genre_${key}`}
                                genreAlbumsObject={resultsGroupByGenre[key]}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default LandingPage;
