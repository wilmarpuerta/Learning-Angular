import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = "hola";
  tasks = [
    'Instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ];
  img = 'https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg';

  clickHandler(){
    alert("Hola");
  }

  changeHandler(event: Event)
  {
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent)
  {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
