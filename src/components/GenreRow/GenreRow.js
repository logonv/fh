import React from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import { album } from "../../constants/album";
import { Typography } from "@mui/material";

const GenreRow = ({ genreAlbumsObject }) => {
    console.log("genreAlbumsObject", genreAlbumsObject);
    //structure of genreAlbumsObject is genreName '', url: '', albums :[]

    return (
        <div>
            <Typography variant="h4">{genreAlbumsObject.genreName}</Typography>

            <div className="albums">
                {genreAlbumsObject.albums.map((album) => {
                    return (
                        <div className="album">
                            <AlbumCard key={album.name} album={album} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GenreRow;
