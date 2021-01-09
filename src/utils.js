export const getTrends = async () =>{
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=9302d5c2147321a4f7bbb6db23383016");
    const data = await response.json();
    return data;

}