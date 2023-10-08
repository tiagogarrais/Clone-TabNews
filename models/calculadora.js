function somar (numero1, numero2){
    if(typeof numero1 !== "number"){
        console.log("O primeiro elemento deve ser um número")
        return "Erro"
    }

    if(typeof numero2 !== "number"){
        console.log("O segundo elemento deve ser um número")
        return "Erro"
    }

    return numero1+numero2
}

exports.somar = somar
