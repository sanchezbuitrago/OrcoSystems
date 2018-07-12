import { Component } from '@angular/core';

//variables para jquery
declare var jQuery:any;
declare var $:any;

@Component({
    selector:'app-servicios',
    templateUrl:'./servicios.component.html',
    styleUrls:['./servicios.component.css']
})

export class AppServicios{
    public title:string = 'App Servicios';
}
