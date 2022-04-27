import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Paper,
} from "@mui/material";

const AlbumDetails = ({ fetchedAlbums }) => {
    // useEffect(() => {
    //     fetchTop50Albums().then((apiResponse) => {
    //         const results = apiResponse.feed.results;
    //         setFetchedAlbums(results);
    //     });
    // }, []);
    const [album, setAlbum] = useState({});
    let { albumkey } = useParams();
    useEffect(() => {
        console.log("a");
        const albumArr = fetchedAlbums.filter((album) => {
            if (album.id === albumkey) {
                console.log("key match");
                return album;
            } else {
                return false;
            }
        });
        console.log(albumArr);
        // const album = albumArr[0];
        // console.log(album);
        setAlbum(albumArr[0]);
    }, [fetchedAlbums, album, albumkey]);

    return (
        <div>
            {album ? (
                <div className="albumDetailsDiv">
                    <Card
                        sx={{
                            maxWidth: "80vw",
                            minWidth: "80vw",
                            height: "90vh",
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
                            <Grid container spacing={3}>
                                <Grid container item xs={6} spacing={3}>
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                textAlign="center"
                                            >
                                                Album Name:
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={8}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Paper
                                            variant="outlined"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                            >
                                                {album.name}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={6}
                                    spacing={3}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                textAlign="center"
                                            >
                                                Artist Name:
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={8}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Paper
                                            variant="outlined"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                            >
                                                {album.artistName}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    spacing={3}
                                    xs={6}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                textAlign="center"
                                            >
                                                Release Date:
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={8}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Paper
                                            variant="outlined"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                            >
                                                {album.releaseDate}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    spacing={3}
                                    xs={6}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                textAlign="center"
                                            >
                                                Genres:
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Paper
                                            variant="outlined"
                                            sx={{
                                                // display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // padding: "3px",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            {album.genres.map((genre) => {
                                                return (
                                                    <>
                                                        <Typography
                                                            variant="h6"
                                                            component="div"
                                                        >
                                                            {genre.name}
                                                        </Typography>
                                                    </>
                                                );
                                            })}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default AlbumDetails;
