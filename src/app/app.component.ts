import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto2';
  completo:string = "";
  public print(nombre:string, apellido:string){
    this.completo ="Bienvenido "+ nombre+ " "+apellido;
  }
}
