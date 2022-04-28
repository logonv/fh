import { Typography } from "@mui/material";
import React from "react";
import GenreRow from "../components/GenreRow/GenreRow";
import SearchBar from "../components/SearchBar/SearchBar";

const LandingPage = ({ resultsGroupByGenre, searchValue, setSearchValue }) => {
    const keys = Object.keys(resultsGroupByGenre);

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
                    <Typography sx={{ typography: { sm: "h1", xs: "h5" } }}>
                        {" "}
                        FilmHub Music
                    </Typography>
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
