x = [15, 25]
y = [12, 15, 23, 43]
z = [...x, ...y]
mult5 = []


function ex08b() {
    document.querySelector("#input08").value = y.join("-")
}

function ex08d() {
   

    for (i = 0; i < z.length; i++) {
        mult5 = [...mult5, z[i]*5]
    }
    console.log(`Todos os componentes da lista Z multiplicados por 5: ${mult5.join(",")}`)
    document.querySelector("#input08").value = `Todos os componentes da lista Z multiplicados por 5: ${mult5.join(",")}`
}


document.querySelector("#btn08-b").addEventListener("click", ex08b)
document.querySelector("#btn08-d").addEventListener("click", ex08d)