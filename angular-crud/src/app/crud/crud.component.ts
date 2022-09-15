import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { CrudDto } from '../../model/crud.dto';
import { ShowCrudDto } from 'src/model/showcrud.dto';
import { CrudService } from 'src/service/crud.service';
import { response } from 'express';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  mocks = new ShowCrudDto;


  form: FormGroup | any;
  ufs = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  inputs = [
    "name",
    "email",
    "number",
    "cpf",
    "birthDate",
    "street",
    "district",
    "state",
    "streetNum",
    "city",
    "cep",
  ]
  constructor(
    private service: CrudService,
  ) { }

  ngOnInit(): void {
    this.crudGetText(new CrudDto);
    this.mocks.saveName = [];

  }

  crudGetText(crudDto: CrudDto) {
    this.form = new FormGroup({
      name: new FormControl(crudDto.name),
      email: new FormControl(crudDto.email),
      number: new FormControl(crudDto.number),
      cpf: new FormControl(crudDto.cpf),
      birthDate: new FormControl(crudDto.birthDate),
      street: new FormControl(crudDto.street),
      streetNum: new FormControl(crudDto.streetNum),
      district: new FormControl(crudDto.district),
      city: new FormControl(crudDto.city),
      state: new FormControl(crudDto.state),
      cep: new FormControl(crudDto.cep),
    });
    ;
  }

  saveBtn(): void {
    let formObj = this.form.getRawValue(CrudDto);
    let serialize = JSON.stringify(formObj);
    console.log(formObj);
    console.log(serialize);
    this.mocks.saveName.push(formObj);
    console.log(this.mocks.saveName);
    for (let i = 0; i < this.inputs.length; i++) {    //clear input boxes values
      this.form.controls[this.inputs[i]].setValue("");
    }
    //send to api
  }
  saveBtnTest(): void{
    let formObj = this.form.getRawValue(CrudDto);
    let serialize = JSON.stringify(formObj);
  }

  listBtn(): void {
    this.service.getAll().subscribe(response => {
      console.log(response);
    });
  }
}


