import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  formulario!: FormGroup;
  numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';

  constructor() { }

  createForm() {
    this.formulario = new FormGroup({
      tarifa: new FormControl(""),
      nombre: new FormControl("", [Validators.required, Validators.min(1)]),
      apellido: new FormControl("", [Validators.required, Validators.min(1)]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.min(1)]),
      telefono: new FormControl("", [Validators.required, Validators.min(1), Validators.pattern(this.numericNumberReg)]),
      operador: new FormControl("", [Validators.required, Validators.min(1)]),
      conservar: new FormControl("", [Validators.required, Validators.min(1)]),
      fibra: new FormControl("", [Validators.required, Validators.min(1)]),
      llamamos: new FormControl("", [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

}
