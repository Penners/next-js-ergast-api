const image = async (req, res) => {

    const { wiki } = req.query

    const regex = /^.+\/wiki\/(?<title>.+)$/;

    const match = wiki.match(regex)

    const { title } = match.groups


    const image = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&redirects=1&prop=pageimages&format=json&pithumbsize=200`)
    .then(res => res.json())
    .then((resp) => {
        console.log(resp)
        return resp.query.pages
    }).catch((error) => {
        return false
    })



    res.statusCode = 200
    // res.send(image)
    // res.json(image[Object.keys(image)[0]].thumbnail.source)
    res.redirect(301, image[Object.keys(image)[0]].thumbnail.source)
}

export default image