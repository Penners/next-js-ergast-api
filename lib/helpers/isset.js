const isset = (accessor) => {
    try {
        return accessor() !== undefined && accessor() !== null
    } catch(error){
        return false
    }
}

export default isset