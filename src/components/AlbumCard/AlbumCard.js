import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";



const AlbumCard = ({album}) => {
    return (
        <Card sx={{  maxWidth:'30vh', minWidth:'30vh' ,height:'40vh', overflow:"auto" }}>
            <CardMedia
                component="img"
                sx={{
                    height:'60%',
                    objectFit: 'contain'
                  }}
                image={album.artworkUrl100}
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {album.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {album.artistName}
                </Typography>
            </CardContent>
            
        </Card>
    );
};

export default AlbumCard;
