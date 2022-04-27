import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";



const AlbumCard = ({album}) => {
    return (
        <Card sx={{ maxWidth: 200, height:400, overflow:"auto" }}>
            <CardMedia
                component="img"
                sx={{
                    height:200,
                    width: '100%',
                    objectFit: 'cover'
                  }}
                // height="140"

                image={album.artworkUrl100}
                // alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
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
