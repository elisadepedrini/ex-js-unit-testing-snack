const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snacks.js")



test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Elisa De Pedrini")).toBe("EDP")
})


test("La funzione createSlug restituisce una stringa in lowercase, sostituisce gli spazi con - e lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(createSlug("QUESTO È UN TEST")).toBe("questo-è-un-test")
    expect(() => createSlug("")).toThrow()
    expect(() => createSlug(null)).toThrow()
})


test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const number = [2, 3, 8, 4]
    expect(average(number)).toBe(4.25)
})


test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("oro")).toBeTruthy()
})


test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {

    const posts = [
        {id: 1, title: "Harry Potter", slug: "harry-potter"},
        {id: 2, title: "Hunger Games", slug: "hunger-games"},
        {id: 3, title: "Twilight", slug: "twilight"}
    ]
    expect(findPostById(posts, 2)).toEqual({id: 2, title: "Hunger Games", slug: "hunger-games"})
})