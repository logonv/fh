import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AlbumCard = ({ album }) => {
    let navigate = useNavigate();
    const learnMoreClicked = () => {
        navigate(`/album/${album.id}`);
    };
    return (
        <Card
            sx={{
                maxWidth: "30vh",
                minWidth: "30vh",
                height: "40vh",
                overflow: "auto",
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    height: "60%",
                    objectFit: "contain",
                }}
                image={album.artworkUrl100}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{ typography: { sm: "subtitle1", xs: "subtitle2" } }}
                    component="div"
                >
                    {album.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {album.artistName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={learnMoreClicked}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default AlbumCard;
