
function getInitials(name) {
    const nameSplit = name.split(" ")
    const nameMap = nameSplit.map(word => word[0])
    const nameJoin = nameMap.join("")
    return nameJoin
}




module.exports = {
    getInitials
}