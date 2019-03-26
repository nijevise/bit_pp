const getData = (callback) => {
    const fetchData = fetch('http://127.0.0.1:3000/')
        .then(result => {
            return result.json()
        }).catch(error => {
            callback()
        })
    return fetchData
}

export { getData }
