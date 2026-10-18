const { getInitials } = require("./snacks.js")



test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Elisa De Pedrini")).toBe("EDP")
})
