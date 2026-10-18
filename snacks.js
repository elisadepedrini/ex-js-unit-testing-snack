
function getInitials(name) {
    const nameSplit = name.split(" ")
    const nameMap = nameSplit.map(word => word[0])
    const nameJoin = nameMap.join("")
    return nameJoin
}

function createSlug(string) {
    return string.toLowerCase().split(" ").join("-")
}


function average(numberArray) {
    return numberArray.reduce((acc, curr) => acc + curr, 0) / numberArray.length
}


module.exports = {
    getInitials,
    createSlug,
    average
}