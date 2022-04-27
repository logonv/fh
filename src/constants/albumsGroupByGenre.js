import { apiResponse } from "./apiResponse";
const results = apiResponse.feed.results

// console.log(results)

let resultsGroupByGenre = {}
results.forEach((album) => {
    let genres = album.genres
    genres.forEach((genreObject) => {
        // console.log('genre', genreObject)
        if (!resultsGroupByGenre[genreObject.genreId]){
            resultsGroupByGenre[genreObject.genreId] = {}
            resultsGroupByGenre[genreObject.genreId]['genreName'] = genreObject.name
            resultsGroupByGenre[genreObject.genreId]['url'] = genreObject.url
            resultsGroupByGenre[genreObject.genreId]['albums'] = []


        }
        resultsGroupByGenre[genreObject.genreId]['albums'].push(album)
    })
})

// console.log(Object.keys(resultsGroupByGenre))

console.log("resultGroupByGenre", resultsGroupByGenre)

export default resultsGroupByGenre