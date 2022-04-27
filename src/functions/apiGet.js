const fetchTop50Albums = async () => {
    const results = await fetch(
        // "https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json", 
        // {mode: 'no-cors'}
        "http://localhost:4000/appleResults"
    );
    // console.log(results);
    const data = await results.json();
    // console.log(data);
    return data;
};

module.exports = {
    fetchTop50Albums,
};
