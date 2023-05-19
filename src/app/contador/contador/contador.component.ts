import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
  })

export class ContadorComponent{
    public title: string = 'Hola Angular';
    public numero:number = 10;
  
    public base: number = 5;
  
   acumular(operation:string){
    if(operation=='sumar')
    this.numero+=this.base;
    else this.numero-=this.base;
  
   }

}