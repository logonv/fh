import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";



const AlbumCard = ({album}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                // height="140"

                image={album.artworkUrl100}
                // alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {album.name}
                </Typography>
                <Typography variant="h7" color="text.secondary">
                    {album.artistName}
                </Typography>
            </CardContent>
            
        </Card>
    );
};

export default AlbumCard;
