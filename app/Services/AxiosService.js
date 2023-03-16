
// @ts-ignore
export const nasaApi = new axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod',
    timeout: 8000,
    params: { api_key: '2DRMc8Ah0Y0rljaAOqEQtjiMY3f6ZrfswxzINUX1' }
    // params: { api_key: 'DEMO_KEY' }

})

// @ts-ignore
export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/',
    timeout: 8000
})