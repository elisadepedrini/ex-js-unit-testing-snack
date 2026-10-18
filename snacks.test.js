const { getInitials, createSlug, average } = require("./snacks.js")



test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Elisa De Pedrini")).toBe("EDP")
})


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("STO STUDIANDO UNIT TESTING")).toBe("sto studiando unit testing")
})


test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const number = [2, 3, 8, 4]
    expect(average(number)).toBe(4.25)
})