export type UnsplashType = {
    id: string;
    urls: {raw: string};
    alt_description: string;
    cart: number;
    price: number;
}

const api = async (query: string) => {
    const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const fetchApi = await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=${query}`).then(res => res.json())
        const results = Array.isArray(fetchApi) ? fetchApi : [fetchApi];
    const remap = results.map((unsplash: UnsplashType) => ({
        id: unsplash.id,
        alt_description: unsplash.alt_description,
        urls: unsplash.urls,
    }))

    return remap;
};

export default api;

// TODO: add 'cart' property
