webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/404/404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/404/404.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"site-heading text-center text-white d-none d-lg-block\">{{ title }}</h1>"

/***/ }),

/***/ "../../../../../src/app/404/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App404; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var App404 = (function () {
    function App404() {
        this.title = 'Pagina no encontrada';
    }
    App404 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-404',
            template: __webpack_require__("../../../../../src/app/404/404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/404/404.component.css")]
        })
    ], App404);
    return App404;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark py-lg-4\" id=\"mainNav\">\n    <div class=\"container\">\n        <a class=\"navbar-brand text-uppercase text-expanded font-weight-bold \" href=\"\" [routerLink]=\"['/']\">Orco System's</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav mx-auto\">\n                <li class=\"nav-item px-lg-4\">\n                    <a class=\"nav-link text-uppercase text-expanded\" href=\"\" [routerLink]=\"['/']\">Home\n                        <span class=\"sr-only\">(current)</span>\n                    </a>\n                </li>\n                <li class=\"nav-item px-lg-4\">\n                    <a class=\"nav-link text-uppercase text-expanded\" href=\"\" [routerLink]=\"['/servicios']\">Servicios</a>\n                </li>\n                <li class=\"nav-item px-lg-4\">\n                    <a class=\"nav-link text-uppercase text-expanded\" href=\"\" [routerLink]=\"['/contactos']\">Contacto</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer text-faded text-center py-5\">\n    <div class=\"container\">\n        <p class=\"m-0 small\">Copyright &copy; Orco System's 2018</p>\n        <p class=\"m-0 small\">Desarrollador sanchezbuitrago@hotmail.com</p>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My First Angular App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicios_component__ = __webpack_require__("../../../../../src/app/servicios/servicios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contactos_contactos_component__ = __webpack_require__("../../../../../src/app/contactos/contactos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__404_404_component__ = __webpack_require__("../../../../../src/app/404/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__principal_principal_component__ = __webpack_require__("../../../../../src/app/principal/principal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__servicios_servicios_component__["a" /* AppServicios */],
                __WEBPACK_IMPORTED_MODULE_6__contactos_contactos_component__["a" /* AppContactos */],
                __WEBPACK_IMPORTED_MODULE_7__404_404_component__["a" /* App404 */],
                __WEBPACK_IMPORTED_MODULE_8__principal_principal_component__["a" /* PrincipalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["b" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* appRoutingProviders */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_servicios_component__ = __webpack_require__("../../../../../src/app/servicios/servicios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactos_contactos_component__ = __webpack_require__("../../../../../src/app/contactos/contactos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__404_404_component__ = __webpack_require__("../../../../../src/app/404/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal_component__ = __webpack_require__("../../../../../src/app/principal/principal.component.ts");

//Importamos componentes




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'servicios', component: __WEBPACK_IMPORTED_MODULE_1__servicios_servicios_component__["a" /* AppServicios */] },
    { path: 'contactos', component: __WEBPACK_IMPORTED_MODULE_2__contactos_contactos_component__["a" /* AppContactos */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__404_404_component__["a" /* App404 */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/contactos/contactos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactos/contactos.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"verformulariocorreo == false\">\n    <section class=\"page-section cta\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xl-9 mx-auto\">\n                    <div class=\"cta-inner text-center rounded\">\n                        <h2 class=\"section-heading mb-5\">\n                            <span class=\"section-heading-upper\">Orco System's</span>\n                            <span class=\"section-heading-upper\">Contactos</span>\n                        </h2>\n                        <ul class=\"list-unstyled list-hours mb-5 text-left mx-auto\">\n                            <li class=\"list-unstyled-item list-hours-item d-flex\">\n                                Responsable\n                                <span class=\"ml-auto\">Orlando Cobos Castillo</span>\n                            </li>\n                            <li class=\"list-unstyled-item list-hours-item d-flex\">\n                                Celular\n                                <span class=\"ml-auto\">312 322 4562</span>\n                            </li>\n                            <li class=\"list-unstyled-item list-hours-item d-flex\">\n                                WhatsApp\n                                <span class=\"ml-auto\">+57 312 322 4562</span>\n                            </li>\n                            <li class=\"list-unstyled-item list-hours-item d-flex\">\n                                Email\n                                <span class=\"ml-auto\">orlando_coca@yahoo.es</span>\n                            </li>\n                        </ul>-\n                        <div class=\"intro-button mx-auto\">\n                            <a class=\"btn btn-primary btn-xs\" (click)=\"mostrarformulariocorreo()\">Enviar Correo</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<div class=\"divform text-center\" *ngIf=\"verformulariocorreo == true\">\n\n    <div class=\"form-group row\">\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Nombre</label>\n        <div class=\"col-10\">\n            <input class=\"form-control\" type=\"text\"  id=\"nombre\" [(ngModel)]=\"nombrecorreo\">\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"example-search-input\" class=\"col-2 col-form-label\">Asunto</label>\n        <div class=\"col-10\">\n            <input class=\"form-control\" type=\"search\"  id=\"asunto\" [(ngModel)]=\"asuntocorreo\">\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"example-email-input\" class=\"col-2 col-form-label\">Email</label>\n        <div class=\"col-10\">\n            <input class=\"form-control\" type=\"email\"  id=\"email\" [(ngModel)]=\"emailcorreo\">\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"example-email-input\" class=\"col-2 col-form-label\">Mensaje</label>\n        <div class=\"col-10\">\n            <textarea class=\"form-control\" id=\"mesaje\" rows=\"3\" [(ngModel)]=\"mensajecorreo\"></textarea>\n        </div>\n    </div>\n\n    <div class=\"intro-button mx-auto\">\n        <a type=\"submit\" class=\"btn btn-primary btn-xs\" (click)=\"enviaremail()\">Enviar</a>\n        <a type=\"submit\" class=\"btn btn-primary btn-xs\" (click)=\"ocultarformulariocorreo()\">Cancelar</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contactos/contactos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContactos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppContactos = (function () {
    function AppContactos() {
        this.title = 'App Contactos';
        this.verformulariocorreo = false;
        this.nombrecorreo = "";
        this.asuntocorreo = "";
        this.emailcorreo = "";
        this.mensajecorreo = "";
    }
    AppContactos.prototype.mostrarformulariocorreo = function () {
        this.verformulariocorreo = true;
    };
    AppContactos.prototype.ocultarformulariocorreo = function () {
        this.verformulariocorreo = false;
    };
    AppContactos.prototype.enviaremail = function () {
        if (this.nombrecorreo == "", this.asuntocorreo == "", this.emailcorreo == "", this.mensajecorreo == "") {
            alert('Debe llenar todos los campos');
        }
        else {
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
                        window.location.href = '/';
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
            }
            else {
                alert('Correo no valido');
            }
        }
    };
    AppContactos.prototype.isValidEmail = function (mail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    };
    AppContactos = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactos',
            template: __webpack_require__("../../../../../src/app/contactos/contactos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contactos/contactos.component.css")]
        })
    ], AppContactos);
    return AppContactos;
}());



/***/ }),

/***/ "../../../../../src/app/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"site-heading text-center text-white d-none d-lg-block\">\n    <span class=\"site-heading-lower\">Orco System's</span>\n   <!-- <span class=\"site-heading-upper text-primary mb-3\">A Free Bootstrap 4 Business Theme</span>-->\n  </h1>\n\n  <section class=\"page-section clearfix\">\n    <div class=\"container\">\n      <div class=\"intro\">\n        <img class=\"intro-img img-fluid mb-3 mb-lg-0 rounded\" src=\"assets/img/img1.jpg\" alt=\"\">\n        <div class=\"intro-text left-0 text-center bg-faded p-5 rounded\">\n          <h2 class=\"section-heading mb-4\">\n            <span class=\"section-heading-upper\">Soporte Tecnico Remoto</span>\n            <span class=\"section-heading-upper\">Soporte Tecnico en Sitio</span>\n          </h2>\n          <p class=\"mb-3\">Brindamos un servicio completo en gestion y administracion de su infraestructura tecnologica.\n          </p>\n          <div class=\"intro-button mx-auto\">\n            <a class=\"btn btn-primary btn-xl\" href=\"\" [routerLink]=\"['/servicios']\">Nuestros Servicios</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.title = 'Pagina Principal';
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-principal',
            template: __webpack_require__("../../../../../src/app/principal/principal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/servicios/servicios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/servicios/servicios.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section\">\n    <div class=\"container\">\n        <div class=\"product-item\">\n            <div class=\"product-item-title d-flex\">\n                <div class=\"bg-faded p-5 d-flex mr-auto rounded\">\n                    <h2 class=\"section-heading mb-0\">\n                        <span class=\"section-heading-upper\">Mantenimiento de Servidores y</span>\n                        <span class=\"section-heading-upper\">Cableado Estructurado</span>\n                    </h2>\n                </div>\n            </div>\n            <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"assets/img/servidores.jpg\" alt=\"\">\n            <!--\n            <div class=\"product-item-description d-flex ml-auto\">\n                <div class=\"bg-faded p-4 rounded\">\n                    <p class=\"mb-0\">Descripcion del servicio.</p>\n                </div>\n            </div>\n            -->\n        </div>\n    </div>\n</section>\n\n<section class=\"page-section\">\n    <div class=\"container\">\n        <div class=\"product-item\">\n            <div class=\"product-item-title d-flex\">\n                <div class=\"bg-faded p-5 d-flex ml-auto rounded\">\n                    <h2 class=\"section-heading mb-0\">\n                        <span class=\"section-heading-upper\">Mantenimiento de Redes y</span>\n                        <span class=\"section-heading-upper\">Equipos de Comunicacion</span>\n                    </h2>\n                </div>\n            </div>\n            <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"assets/img/redescomunicacion.jpg\" alt=\"\">\n           \n        </div>\n    </div>\n</section>\n\n<section class=\"page-section\">\n    <div class=\"container\">\n        <div class=\"product-item\">\n            <div class=\"product-item-title d-flex\">\n                <div class=\"bg-faded p-5 d-flex mr-auto rounded\">\n                    <h2 class=\"section-heading mb-0\">\n                        <span class=\"section-heading-upper\">Mantenimiento de </span>\n                        <span class=\"section-heading-upper\">Computadores e impresoras</span>\n                    </h2>\n                </div>\n            </div>\n            <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"assets/img/reparacioncomputadoras.jpg\" alt=\"\">\n           \n        </div>\n    </div>\n</section>\n\n<section class=\"page-section\">\n    <div class=\"container\">\n        <div class=\"product-item\">\n            <div class=\"product-item-title d-flex\">\n                <div class=\"bg-faded p-5 d-flex ml-auto rounded\">\n                    <h2 class=\"section-heading mb-0\">\n                        <span class=\"section-heading-upper\">Instalacion de Sistemas</span>\n                        <span class=\"section-heading-upper\">de Circuito Cerrado</span>\n                    </h2>\n                </div>\n            </div>\n            <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"assets/img/cctv.jpg\" alt=\"\">\n           \n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/servicios/servicios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServicios; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppServicios = (function () {
    function AppServicios() {
        this.title = 'App Servicios';
    }
    AppServicios = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-servicios',
            template: __webpack_require__("../../../../../src/app/servicios/servicios.component.html"),
            styles: [__webpack_require__("../../../../../src/app/servicios/servicios.component.css")]
        })
    ], AppServicios);
    return AppServicios;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map