const fetchAll = async (requests) => {
        
    const results = {}

    await Promise.all(requests.map((request) => {
        return fetch(request.url)
        .then((res) => {
            if (!res.ok){
                console.log(request.name)
                throw new Error(`Bad API response: ${res.status}`)
            } 
            
            return res.json()
        })
        .then((resp) => {
            results[request.name] = {
                success: true,
                data: resp
            }
            return true
        }).catch((error) => {
            results[request.name] = {
                url: request.url,
                success: false,
                error: error.toString(),
                data: false
            }
            return false
        }) 
    }))

    return results
}

export default fetchAll