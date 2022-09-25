const getNews = async() =>{
    const response = await fetch('https://swapi.dev/api/films/');    
    //const response = await fetch('http://api.quotable.io/random');
    const data = await response.json();
    return data;
};
export default getNews;