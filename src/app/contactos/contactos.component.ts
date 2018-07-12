import { Component } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-contactos',
    templateUrl: './contactos.component.html',
    styleUrls: ['./contactos.component.css']
})

export class AppContactos {
    public title: string = 'App Contactos';
    public verformulariocorreo: boolean = false;
    public nombrecorreo: string = "";
    public asuntocorreo: string = "";
    public emailcorreo: string = "";
    public mensajecorreo: string = "";

    mostrarformulariocorreo() {
        this.verformulariocorreo = true;
    }

    ocultarformulariocorreo() {
        this.verformulariocorreo = false;
    }

    enviaremail() {
        if (this.nombrecorreo == "", this.asuntocorreo == "", this.emailcorreo == "", this.mensajecorreo == "") {
            alert('Debe llenar todos los campos');

        } else {
            if (this.isValidEmail(this.emailcorreo)) {
                $.ajax({
                    // la URL para la petición
                    url: 'https://orcosystems.herokuapp.com/funcionalidades/enviaremail',
                    
                    // la información a enviar
                    // (también es posible utilizar una cadena de datos)
                    data: {
                        nombrecorreo: this.nombrecorreo,
                        asuntocorreo: this.asuntocorreo,
                        emailcorreo: this.emailcorreo,
                        mensajecorreo: this.mensajecorreo
                    },

                    // especifica si será una petición POST o GET
                    type: 'POST',

                    // el tipo de información que se espera de respuesta
                    //dataType: '"application/json"',

                    // código a ejecutar si la petición es satisfactoria;
                    // la respuesta es pasada como argumento a la función
                    success: function (json) {
                        alert(json);
                        history.back();

                    },

                    // código a ejecutar si la petición falla;
                    // son pasados como argumentos a la función
                    // el objeto de la petición en crudo y código de estatus de la petición
                    error: function (xhr, status) {
                        alert('Disculpe, existió un problema');
                        console.log(xhr);
                        console.log(status);
                    },
                });
            } else {
                alert('Correo no valido');
            }

        }
    }

    isValidEmail(mail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    }
}
