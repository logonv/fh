import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTop50Albums } from "../../functions/apiGet";

const AlbumDetails = ({ fetchedAlbums, setFetchedAlbums }) => {
    useEffect(() => {
        fetchTop50Albums().then((apiResponse) => {
            const results = apiResponse.feed.results;
            setFetchedAlbums(results);
        });
    }, []);

    let { albumkey } = useParams();
    const albumArr = fetchedAlbums.filter((album) => {
        if (album.id === albumkey) {
            console.log("key match");
            return album;
        } else {
            return false;
        }
    });
    console.log(albumArr);
    const album = albumArr[0];
    console.log(album);
    return <div>{album ? <div>{album.name}</div> : ""}</div>;
};

export default AlbumDetails;
