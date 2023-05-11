document.querySelector("#calcMedia").addEventListener("click", calculeMedia)

function calculeMedia() {
    let n1 = Number(document.querySelector("#num1").value)
    let n2 = Number(document.querySelector("#num2").value)

    tot = (n1 + n2)/2
    document.querySelector("#labelMedia").innerHTML = tot
}