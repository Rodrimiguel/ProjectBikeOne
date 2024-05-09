import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './componentes/hijo/hijo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectbikeone';


  nombre: String = "Sr. Roderick";
  numero = 101010;
  numero1 = 808080;
  resultado = 3333;

  //atajo para identar el codigo : alt + shift + "f"
  datos: any = {
    nombre: "Keanu",
    apellido: "Reeves",
    edad: 45,
    documento: "70-100100-50"
  }



}
