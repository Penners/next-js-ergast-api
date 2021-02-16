const getWikipediaThumbnail = async (url, size = 250) => {
    // function that takes Wikipedia URL then returns thumbnail image
    const match = url.match(/^.+\/wiki\/(?<title>.+)$/)
    const title = match?.groups?.title ?? false

    if (!title){
        return {
            success: false
        }
    }
    const endpoint = encodeURI(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=${size}`)
    console.log(endpoint)
    const image = await fetch(endpoint)
        .then(res => res.json())
        .then((resp) => {
            return resp.query.pages[Object.keys(resp.query.pages)[0]]
        }).catch((error) => {
            return false
        })
    
    if (!image || image.thumbnail === undefined){
        return {
            success: false
        }
    }

    return {...image, success: true}
}

export default getWikipediaThumbnail