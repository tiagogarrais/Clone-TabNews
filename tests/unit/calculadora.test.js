const calculadora = require ("../../models/calculadora")

test("somar 2 + 2 deve retornar 4", ()=>{
    const resultado = calculadora.somar(2,2)
    expect(resultado).toBe(4)
})

test("somar 'banana' com 100 deve retornar 'Erro'", ()=>{
    const resultado = calculadora.somar('banana'+100)
    expect(resultado).toBe("Erro")
})

