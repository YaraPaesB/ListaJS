document.querySelector("#start").addEventListener("click", mathPow)

function mathPow() {
    x = prompt("Digite um valor:")
    y = prompt("Digite o numero que sera elevado:")

   tot = Math.pow(x,y)
    document.querySelector("#text").value = "Resultado exibido no console."
    console.log(tot);
}