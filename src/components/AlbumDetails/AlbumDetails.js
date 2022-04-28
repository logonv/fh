import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Paper,
    Button,
    CardHeader,
} from "@mui/material";

const AlbumDetails = ({ fetchedAlbums }) => {
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
        setAlbum(albumArr[0]);
    }, [fetchedAlbums, album, albumkey]);

    let navigate = useNavigate();
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
                        <CardHeader
                            action={
                                <Button
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                    size="large"
                                    variant="contained"
                                >
                                    {" "}
                                    Back
                                </Button>
                            }
                        />

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
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: {
                                                        sm: "h6",
                                                        xs: "caption",
                                                    },
                                                }}
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

                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: {
                                                        sm: "h6",
                                                        xs: "caption",
                                                    },
                                                }}
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

                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: {
                                                        sm: "h6",
                                                        xs: "caption",
                                                    },
                                                }}
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

                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: {
                                                        sm: "h6",
                                                        xs: "caption",
                                                    },
                                                }}
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

                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: {
                                                        sm: "h6",
                                                        xs: "caption",
                                                    },
                                                }}
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
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: {
                                                        sm: "h6",
                                                        xs: "caption",
                                                    },
                                                }}
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
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: {
                                                        sm: "h6",
                                                        xs: "caption",
                                                    },
                                                }}
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
                                                justifyContent: "center",
                                                alignItems: "center",
                                                minHeight: "10vh",
                                                textAlign: "center",
                                            }}
                                        >
                                            {album.genres
                                                ? album.genres.map((genre) => {
                                                      return (
                                                          <>
                                                              <Typography
                                                                  sx={{
                                                                      typography:
                                                                          {
                                                                              sm: "h6",
                                                                              xs: "caption",
                                                                          },
                                                                  }}
                                                                  component="div"
                                                              >
                                                                  {genre.name}
                                                              </Typography>
                                                          </>
                                                      );
                                                  })
                                                : " "}
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
