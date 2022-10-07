const requests = {
    netflix_originals:"https://api.themoviedb.org/3/discover/tv?api_key=b598d4090fda8de6e83b5699950afd7d&language=en-US",
    fetchToprated : "https://api.themoviedb.org/3/movie/top_rated?api_key=b598d4090fda8de6e83b5699950afd7d&language=en-US&page=1",
    trending: " https://api.themoviedb.org/3/trending/all/week?api_key=b598d4090fda8de6e83b5699950afd7d",
    action: "https://api.themoviedb.org/3/discover/movie/?api_key=b598d4090fda8de6e83b5699950afd7d&with_genres=28",
    animation: "https://api.themoviedb.org/3/discover/movie?api_key=b598d4090fda8de6e83b5699950afd7d&with_genres=16",
    history: "https://api.themoviedb.org/3/discover/movie?api_key=b598d4090fda8de6e83b5699950afd7d&language=en-US&with_genre_ids=36",
    horror: "https://api.themoviedb.org/3/discover/movie?api_key=b598d4090fda8de6e83b5699950afd7d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27",
    crime: "https://api.themoviedb.org/3/discover/movie?api_key=b598d4090fda8de6e83b5699950afd7d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80",
}

export default requests