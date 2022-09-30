import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  

  miFormularioReactivo : FormGroup = this.fb.group({
    nombre: ['',Validators.required]
  })

  color : string = 'red';

  mensaje : string = '';

  constructor(private fb: FormBuilder) {}


  tieneError():boolean | undefined {
    return this.miFormularioReactivo.get('nombre')?.invalid && this.miFormularioReactivo.get('nombre')?.touched
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

  cambiarMensaje(){
    this.mensaje = this.miFormularioReactivo.get('nombre')?.value
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
