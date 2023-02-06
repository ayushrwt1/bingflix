const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9a9751dcb1e165ea462e4af782a3b5df',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;