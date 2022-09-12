import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { CrudDto } from '../../model/crud.dto';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
    this.crudGetText(new CrudDto);
  }

  crudGetText(crudDto: CrudDto) {
    this.form = new FormGroup({
      nameInp: new FormControl(crudDto.name),
      emailInp: new FormControl(crudDto.email),
      numberInp: new FormControl(crudDto.number),
      cpfInp: new FormControl(crudDto.cpf),
      birthDateInp: new FormControl(crudDto.birthDate),
      streetInp: new FormControl(crudDto.street),
      streetNumInp: new FormControl(crudDto.streetNum),
      districtInp: new FormControl(crudDto.district),
      cityInp: new FormControl(crudDto.city),
      stateInp: new FormControl(crudDto.state),
      cepInp: new FormControl(crudDto.cep),
    });
  }
  saveBtn(): void {
    let formObj = this.form.getRawValue();
    let serialize = JSON.stringify(formObj);
    console.log(formObj);
    console.log(serialize);
      // nameInp: (crudDto.name),
      // emailInp: (crudDto.email),
      // numberInp: (crudDto.number),
      // cpfInp: (crudDto.cpf),
      // birthDateInp: (crudDto.birthDate),
      // streetInp: (crudDto.street),
      // streetNumInp: (crudDto.streetNum),
      // districtInp: (crudDto.district),
      // cityInp: (crudDto.city),
      // stateInp: (crudDto.state),
      // cepInp:
    //send to api
  }
}


