//importando funciones
import {guardarDatosSesion, consultarDatosSesion} from './modules/funcionesDonacion.js';
const datosInputJSON=`[
    { 
    "inputType": "input",
    "name": "Name"
    },
    {
    "inputType": "select",
    "name": "Monto"   
    },
    {
    "inputType": "input",
    "name": "Tarjeta"   
    },
    {
    "inputType": "input",
    "name": "Caducidad"   
    },
    {
    "inputType": "input",
    "name": "Codigo"   
    },
    {
    "inputType": "input",
    "name": "Check"   
    }
  ]`;
const datosInput = JSON.parse(datosInputJSON);
let datosDonante = [];
//se espera a que el DOM este listo
$( document ).ready(function() {
    //consulta si ya se realizo alguna donación con anterioridad si esto es verdadero entonces no dejara volver a donar
    consultarDatosSesion();
    //si se hace click sobre el botón de donación se oculta este mismo y se abre el formulario
    $("#contenedorBoton").click(function (e) {
        //evita que se refresque la pagina
        e.preventDefault();
        //cambiamos el id de contenedorBoton por off que tiene la propiedad de display:none haciendo que este desaparezca
        $("#contenedorBoton").attr("id","off");
        //cambiamos el id de formularioDonacionOFF que tiene la propiedad display:none por formularioDonacionON este mismo tiene la propiedad display: block, lo que hace que aparezca en la pagina
        $("#formularioDonacionOFF").attr("id","formularioDonacionON");
        //ahora con #formularioDonacionON ya "tangible" para el usuario cuando este hace submit se comienza a guardar los datos ingresados en el formulario
        $("#formularioDonacionON").submit(function () {
            for (const datoInput of datosInput) {
                //se recupera los valores ingresados en los inputs, select del formulario y proceden a guardarse en el array datosDonante
                //ej de primer input: $('input#inputName').each(function(){}) asi es la estructura base implementada
                //se tuvo que modificar para que recorriera todos los tipos de entrada de datos que hay en el formulario
                $(datoInput.inputType+'#input'+datoInput.name).each(function () {
                    datosDonante.push(this.value);
                });
            }
            //si el ultimo valor del array datosDonante no esta vacío entonces llama a la función guardarDatosSesion
            if(datosDonante[datosDonante.length-1]){
                guardarDatosSesion(datosDonante);
            }
        });
    });
});
