const { getInitials, createSlug, average, isPalindrome } = require("./snacks.js")



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