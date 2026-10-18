const { getInitials, createSlug, average } = require("./snacks.js")



test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Elisa De Pedrini")).toBe("EDP")
})


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("QUESTO È UN TEST")).toBe("questo-è-un-test")
})


test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const number = [2, 3, 8, 4]
    expect(average(number)).toBe(4.25)
})