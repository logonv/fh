import "./App.css";
import LandingPage from "./views/LandingPage";
import AlbumDetails from "./components/AlbumDetails/AlbumDetails";
import { fetchTop50Albums } from "./functions/apiGet";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
    const [albumsGroupByGenre, setAlbumsGroupByGenre] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [fetchedAlbums, setFetchedAlbums] = useState([]);

    useEffect(() => {
        // fetch albums and group by genre
        fetchTop50Albums().then((apiResponse) => {
            const results = apiResponse.feed.results;
            setFetchedAlbums(results);
            let resultsGroupByGenre = {};
            results.forEach((album) => {
                let genres = album.genres;
                genres.forEach((genreObject) => {
                    if (!resultsGroupByGenre[genreObject.genreId]) {
                        resultsGroupByGenre[genreObject.genreId] = {};
                        resultsGroupByGenre[genreObject.genreId]["genreName"] =
                            genreObject.name;
                        resultsGroupByGenre[genreObject.genreId]["url"] =
                            genreObject.url;
                        resultsGroupByGenre[genreObject.genreId]["albums"] = [];
                    }
                    resultsGroupByGenre[genreObject.genreId]["albums"].push(
                        album
                    );
                });
            });
            setAlbumsGroupByGenre(resultsGroupByGenre);
        });
    }, []);

    useEffect(() => {
        // filter by input in search bar

        let searchText = searchValue.toLowerCase();
        const filteredResults = fetchedAlbums.filter((album) => {
            if (searchText === "") {
                return album;
            } else {
                if (
                    album.name
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .includes(searchText)
                ) {
                    return album;
                }
                //below if want to search by artist
                // else if(album.artistName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchText)){
                //   return album
                // }
                else {
                    return false;
                }
            }
        });
        let resultsGroupByGenre = {};
        filteredResults.forEach((album) => {
            let genres = album.genres;
            genres.forEach((genreObject) => {
                if (!resultsGroupByGenre[genreObject.genreId]) {
                    resultsGroupByGenre[genreObject.genreId] = {};
                    resultsGroupByGenre[genreObject.genreId]["genreName"] =
                        genreObject.name;
                    resultsGroupByGenre[genreObject.genreId]["url"] =
                        genreObject.url;
                    resultsGroupByGenre[genreObject.genreId]["albums"] = [];
                }
                resultsGroupByGenre[genreObject.genreId]["albums"].push(album);
            });
        });
        setAlbumsGroupByGenre(resultsGroupByGenre);
    }, [searchValue, fetchedAlbums]);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LandingPage
                            resultsGroupByGenre={albumsGroupByGenre}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                    }
                />

                <Route
                    path="/album/:albumkey"
                    element={
                        <AlbumDetails
                            fetchedAlbums={fetchedAlbums}
                            setFetchedAlbums={setFetchedAlbums}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
