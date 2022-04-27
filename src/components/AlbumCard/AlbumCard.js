import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const data = {
    artistName: "Kanye West",
    id: "1451901307",
    name: "Graduation",
    releaseDate: "2007-09-11",
    kind: "albums",
    artistId: "2715720",
    artistUrl: "https://music.apple.com/us/artist/kanye-west/2715720",
    contentAdvisoryRating: "Explict",
    artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/db/ce/e7/dbcee73f-015e-d994-abe4-58fbdfd0569c/00602577027864.rgb.jpg/100x100bb.jpg",
    genres: [
        {
            genreId: "18",
            name: "Hip-Hop/Rap",
            url: "https://itunes.apple.com/us/genre/id18",
        },
        {
            genreId: "34",
            name: "Music",
            url: "https://itunes.apple.com/us/genre/id34",
        },
    ],
    url: "https://music.apple.com/us/album/graduation/1451901307",
};

const AlbumCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                // height="140"

                image={data.artworkUrl100}
                // alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="h7" color="text.secondary">
                    {data.artistName}
                </Typography>
            </CardContent>
            
        </Card>
    );
};

export default AlbumCard;
