import "./App.css";
import LandingPage from "./views/LandingPage";
// import AlbumCard from './components/AlbumCard/AlbumCard';
import { fetchTop50Albums } from "./functions/apiGet";


import { useEffect, useState } from "react";

function App() {
    const [albumsGroupByGenre, setAlbumsGroupByGenre] = useState({});

    useEffect(() => {
        fetchTop50Albums().then((apiResponse) => {
            const results = apiResponse.feed.results;

            let resultsGroupByGenre = {};
            results.forEach((album) => {
                let genres = album.genres;
                genres.forEach((genreObject) => {
                    // console.log('genre', genreObject)
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

    return (
        <>
            <button onClick={fetchTop50Albums}> Click</button>

            <LandingPage resultsGroupByGenre={albumsGroupByGenre} />
        </>
    );
}

export default App;
