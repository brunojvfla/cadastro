var nomeCompleto = document.getElementById("nomeCompleto")

var pessoa = {
    nome: "Paulo Roberto",
    extime: "Vasco",
    municipio: "Duque de Caxias",
    estado: "RJ"
}

var form = document.getElementById("Formtime");
var mensage = document.getElementById("mensage")
var enviadas = document.getElementById("enviadas")
var contador = 0

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    var data = new FormData(event.target);
    var infoUser = Object.fromEntries(data);

    mensage.innerHTML = `Obrigado ${infoUser.nomeCompleto} . Sua solicitação foi enviada.`
    mensage.style.display = "flex"

    setTimeout(()=>{

    },5000)
    console.log(infoUser);
    contador = contador + 1
    enviadas.innerHTML = `enviadas: ${contador}`
})