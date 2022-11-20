export const getGif = async(categori)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1WdSpb0ND9jzfSzAYCrYNCQ7yVesI7Rl&q=${ categori }&limit=30`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map((x)=>(
        {id: x.id, 
        title: x.title,
        url: x.images.downsized_medium.url}
    ));
    console.log(gifs);
    return gifs
}