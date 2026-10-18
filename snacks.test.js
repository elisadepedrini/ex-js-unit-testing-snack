const { getInitials, createSlug } = require("./snacks.js")



test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Elisa De Pedrini")).toBe("EDP")
})


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("STO STUDIANDO UNIT TESTING")).toBe("sto studiando unit testing")
})
