const fetchTop50Albums = async () => {
    const results = await fetch("http://localhost:4000/appleResults");
    const data = await results.json();
    return data;
};

module.exports = {
    fetchTop50Albums,
};
