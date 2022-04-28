import React from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Typography } from "@mui/material";

const GenreRow = ({ genreAlbumsObject }) => {
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
