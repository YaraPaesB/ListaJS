document.querySelector("#btn-05").addEventListener("click", ex05)

let dados={
    marca:"HP",
    modelo:"V15",
    config:{ 
        memoria: 8,
        processador: "i7" 
    },  
}

function ex05() {
    let segundoValArray = mathMin()[1]
    let {
        marca, 
        config: {
            processador
        }
    } = dados

    document.querySelector("#mensagem").value = `A marca do produto é ${marca}, o processador dele é ${processador} e o segundo valor da array é ${segundoValArray}`
}