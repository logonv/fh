import "./App.css";
import LandingPage from "./views/LandingPage";
// import AlbumCard from './components/AlbumCard/AlbumCard';
import { fetchTop50Albums } from "./functions/apiGet";


import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    const [albumsGroupByGenre, setAlbumsGroupByGenre] = useState({});
    const [searchValue, setSearchValue] = useState();
    const [fetchedAlbums, setFetchedAlbums] = useState([])
    useEffect(() => {
        fetchTop50Albums().then((apiResponse) => {
            const results = apiResponse.feed.results;
            setFetchedAlbums(results)

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


    useEffect(() => {
      console.log(searchValue)


      fetchTop50Albums().then((apiResponse) => {
        // const results = apiResponse.feed.results;
        console.log(fetchedAlbums)
        let searchText = searchValue.toLowerCase();
        const filteredResults = fetchedAlbums.filter((album) => {
          if (searchText===''){
            return album
          }
          else {
           
            if(album.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchText)){
              return album
            }
            //below if want to search by artist
            // else if(album.artistName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchText)){
            //   return album
            // }
            else {
              return false
            }

          }




        })  
        let resultsGroupByGenre = {};
        filteredResults.forEach((album) => {
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


    //   fetchTop50Albums().then((apiResponse) => {
    //     const results = apiResponse.feed.results;
    //     console.log(results)
    //     let searchText = searchValue.toLowerCase();
    //     const filteredResults = results.filter((album) => {
    //       if (searchText===''){
    //         return album
    //       }
    //       else {
           
    //         if(album.artistName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchText)){
    //           return album
    //         }
    //         else if(album.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchText)){
    //           return album
    //         }
    //         else {
    //           return false
    //         }

    //       }




    //     })  
    //     let resultsGroupByGenre = {};
    //     filteredResults.forEach((album) => {
    //         let genres = album.genres;
    //         genres.forEach((genreObject) => {
    //             // console.log('genre', genreObject)
    //             if (!resultsGroupByGenre[genreObject.genreId]) {
    //                 resultsGroupByGenre[genreObject.genreId] = {};
    //                 resultsGroupByGenre[genreObject.genreId]["genreName"] =
    //                     genreObject.name;
    //                 resultsGroupByGenre[genreObject.genreId]["url"] =
    //                     genreObject.url;
    //                 resultsGroupByGenre[genreObject.genreId]["albums"] = [];
    //             }
    //             resultsGroupByGenre[genreObject.genreId]["albums"].push(
    //                 album
    //             );
    //         });
    //     });
    //     setAlbumsGroupByGenre(resultsGroupByGenre);
    // });


    }, [searchValue, fetchedAlbums])

    return (
        <>

            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <LandingPage resultsGroupByGenre={albumsGroupByGenre} />
        </>
    );
}

export default App;
