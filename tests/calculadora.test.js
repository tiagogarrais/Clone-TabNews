const calculadora = require("../models/calculadora.js")

test("Somar 2+2 deve retornar 4", ()=>{
    const resultado = calculadora.somar(2, 2)
    expect(resultado).toBe(4)
})

test("Somar 2+10 deve retornar 12", ()=>{
    const resultado = calculadora.somar(2, 10)
    expect(resultado).toBe(12)
})

test("Somar banana+10 deve retornar 'Erro'", ()=>{
    const resultado = calculadora.somar('banana', 10)
    expect(resultado).toBe("Erro")
})

test("Somar 2+banana deve retornar 'Erro'", ()=>{
    const resultado = calculadora.somar(2, 'banana')
    expect(resultado).toBe("Erro")
})