import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { CrudDto } from '../../model/crud.dto';
import { ShowCrudDto } from 'src/model/showcrud.dto';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
   mocks = new ShowCrudDto;  
  // mocks= [
  //   {
  //     name: "Joao",
  //     email: "arroz@gmail",
  //     number: "3188272631",
  //     cpf: "1283731-58",
  //     birthDate: "10/11/2020",
  //     street: "rua almeida lima",
  //     district: "zona sul",
  //     state: "RJ",
  //     streetNum: "25",
  //     city: "new york",
  //     cep: "123123-000",
  //   }
  // ]


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
  constructor() { }

  ngOnInit(): void {
    this.crudGetText(new CrudDto);
    this.mocks.saveName = [ ];
    // this.crudShowText(new ShowCrudDto);
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
    // console.log(serialize);
    this.mocks.saveName.push(formObj);
    console.log(this.mocks.saveName);
    for (let i = 0; i < this.inputs.length; i++) {    //clear input boxes values
      this.form.controls[this.inputs[i]].setValue("");
    }
    //send to api
  }
}


