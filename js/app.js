const formulario = document.getElementById('idform')

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    let sexo = document.getElementById('idsex').value
    let name = document.getElementById('idname').value
    let mail = document.getElementById('idemail').value
    let number = document.getElementById('idnumber').value
    let mensaje = document.getElementById('idmensaje').value
    console.log(sexo, name, mail, number, mensaje)
})