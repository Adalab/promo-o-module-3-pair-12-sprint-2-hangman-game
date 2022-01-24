const callToApi = () => {
    return (
        fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
            .then(response => response.json())
    )
}

export default callToApi;