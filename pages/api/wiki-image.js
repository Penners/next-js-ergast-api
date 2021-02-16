import getWikipediaThumbnail from 'lib/getWikipediaThumbnail'

export default async (req, res) => {
    const { wiki, size = 250 } = req.query

    const data = await getWikipediaThumbnail(wiki, size)


    res.setHeader("Cache-Control", "s-maxage=604800, stale-while-revalidate");
    if (data.success){
        res.redirect(301, data.thumbnail.source)
    } else {
        res.status(404).send('No image found')
    }
  }