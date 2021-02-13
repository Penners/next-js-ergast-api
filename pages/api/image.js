import getWikipediaThumbnail from 'lib/getWikipediaThumbnail'

export default async (req, res) => {
    const { wiki, size = 250 } = req.query

    const data = await getWikipediaThumbnail(wiki, size)


    res.statusCode = 200
    res.json(data)
  }