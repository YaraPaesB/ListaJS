document.querySelector("#btn-min").addEventListener("click", mathMin)

function mathMin() {
    val1 = Number(document.querySelector("#val1array").value)
    val2 = Number(document.querySelector("#val2array").value)
    val3 = Number(document.querySelector("#val3array").value)
    menorVal = Math.min(val1, val2, val3)
    document.querySelector("#valorMin").value =  `O menor valor da lista é ${menorVal}.`
    return [val1, val2, val3]
}

function ex05() {
    let numsArray = mathMin()[1]

    console.log(numsArray)
}