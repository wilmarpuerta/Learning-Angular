import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
  // Signal
  string = signal('Hello word');

  keydownSignalHandler(event: KeyboardEvent)
  {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.string.set(newValue);
  }

  Array = signal([
    'Instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ])

  person = signal({
    name: 'wilmar',
    age: 20
  })

  changeAge(event: Event)
  {
    const input = event.target as HTMLInputElement;
    const newAge = input.value;
    this.person.update(prevStatus => {
      return {
        ...prevStatus,
        age: parseInt(newAge)
      }
    }
  )}

  changeName(event: Event)
  {
    const input = event.target as HTMLInputElement;
    const newName = input.value;
    this.person.update(prevStatus => {
      return {
        ...prevStatus,
        name: newName
      }
    }
  )}

  // Form reactivo
  colorCrl = new FormControl();
  widthCrl = new FormControl(50, {
    nonNullable: true
  })

  nameCrl = new FormControl("Wilmar", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })

  constructor(){
    this.colorCrl.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}
