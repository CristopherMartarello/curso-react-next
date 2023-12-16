export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //Fazendo um zip para a mesma quantidade de posts e photos (para cada indice do post, linkarei com uma foto da requisição)
    const photosAndPosts = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url } //cover = photo
    });

    return photosAndPosts;
}