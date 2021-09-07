export function guardarDatosSesion(datosDonante){
    localStorage.setItem('donacion', true);
    //se transforma el objeto datosDonante a un string en formato JSON para que la información de este se guarde correctamente
    const datosDonanteJSON = JSON.stringify(datosDonante);
    localStorage.setItem("datosDonante", datosDonanteJSON);
}
export function consultarDatosSesion(){
    //se convierte el string JSON guardado a objeto js y se almacena en datosDonante
    const datosDonante = JSON.parse(localStorage.getItem("datosDonante"));
    //si la clave donación tiene como valor true significa que el usuario ya realizo la donación entonces se llama a la función modificarHtml que hace que el botón de donación desaparezca
    if(localStorage.getItem('donacion')){
        modificarHtml(datosDonante);
    }
}
function modificarHtml(datosDonante){
    //Se eliminar el elemento contenedorBoton(Botón de donación)
    $('#contenedorBoton').remove();
    //Se añade la etiqueta h4 en el HTML con un mensaje para el donante
    $("#botonDonacion").prepend(`
                <h4>Ya hemos recibido tu contribución del mes por ${'$'+datosDonante[1]}
                muchas gracias ${datosDonante[0]} <img src="../img/iconos/donaciones/donacion.svg" alt=""><br><br>
                <p>(recuerda que en el siguiente mes este botón volverá a habilitarse para que puedas seguir ayudándonos)</p>
                </h4>`);
}