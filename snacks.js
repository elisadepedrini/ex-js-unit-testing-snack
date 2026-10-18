
function getInitials(name) {
    const nameSplit = name.split(" ")
    const nameMap = nameSplit.map(word => word[0])
    const nameJoin = nameMap.join("")
    return nameJoin
}

function createSlug(string) {
    return string.toLowerCase()
}



module.exports = {
    getInitials,
    createSlug
}