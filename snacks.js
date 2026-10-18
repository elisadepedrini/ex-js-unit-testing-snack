
function getInitials(name) {
    const nameSplit = name.split(" ")
    const nameMap = nameSplit.map(word => word[0])
    const nameJoin = nameMap.join("")
    return nameJoin
}

function createSlug(slug) {
    if(!slug || typeof(slug) !== "string") {
        throw new Error("Titolo vuoto o non valido")
    }
    return slug.toLowerCase().split(" ").join("-")
}


function average(numberArray) {
    return numberArray.reduce((acc, curr) => acc + curr, 0) / numberArray.length
}


function isPalindrome(palindrome) {
    const stringLower = palindrome.toLowerCase()
    const invertedString = stringLower.split("").reverse().join("")
    return stringLower === invertedString
}


function findPostById(array, id) {
    return array.find(post => post.id === id)
    
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}