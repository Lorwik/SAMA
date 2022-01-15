import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  formulario!: FormGroup;
  numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';

  errorTarifa: boolean = false;
  errorNombre: boolean = false;
  errorApellido: boolean = false;
  errorEmail: boolean = false;
  errorTelefono: boolean = false;
  errorOperador: boolean = false;
  errorConservar: boolean = false;
  errorFibra: boolean = false;
  errorLlamamos: boolean = false;

  constructor() { }

  createForm() {
    this.formulario = new FormGroup({
      tarifa: new FormControl("", Validators.required),
      nombre: new FormControl("", [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(2)]),
      telefono: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(this.numericNumberReg)]),
      operador: new FormControl("", [Validators.required, Validators.minLength(2)]),
      conservar: new FormControl("", [Validators.required]),
      fibra: new FormControl("", [Validators.required]),
      llamamos: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  validarTelefono() {

    let valor: string = String(this.formulario.get("telefono")?.value);
    const regexp = new RegExp(this.numericNumberReg);

    if( !valor.match( regexp ) ) {
      this.formulario.get("telefono")?.setValue(null);
    }

    console.log(typeof( valor ) );
  }

  submit() {

    if (this.formulario.invalid) {
      if (this.formulario.get('tarifa')?.status !== 'VALID') {
        this.errorTarifa = true;
      } else {
        this.errorTarifa = false;
      }
      if (this.formulario.get('nombre')?.status !== 'VALID') {
        this.errorNombre = true;
      } else {
        this.errorNombre = false;
      }
      if (this.formulario.get('apellido')?.status !== 'VALID') {
        this.errorApellido = true;
      } else {
        this.errorApellido =false;
      }
      if (this.formulario.get('email')?.status !== 'VALID') {
        this.errorEmail = true;
      } else {
        this.errorEmail = false;
      }
      if (this.formulario.get('telefono')?.status !== 'VALID') {
        this.errorTelefono = true;
      } else {
        this.errorTelefono = false;
      }
      if (this.formulario.get('operador')?.status !== 'VALID') {
        this.errorOperador = true;
      } else {
        this.errorOperador = false;
      }
      if (this.formulario.get('conservar')?.status !== 'VALID') {
        this.errorConservar = true;
      } else {
        this.errorConservar = false;
      }
      if (this.formulario.get('fibra')?.status !== 'VALID') {
        this.errorFibra = true;
      } else {
        this.errorFibra = false;
      }
      if (this.formulario.get('llamamos')?.status !== 'VALID') {
        this.errorLlamamos = true;
      } else {
        this.errorLlamamos = false;
      }
    } else {
      // Mandar E-mail Aquí!!
      console.log('Formulario Enviado');
      // Limpiar formulario Aquí!!
    }
  }
}