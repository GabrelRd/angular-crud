package com.example.crud.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.crud.model.CrudModel;
import com.example.crud.repository.CrudRepository;

@Service
public class CrudService {
    private CrudRepository crudRepository;
    public List<CrudModel> getListCrud(){   
        return this.crudRepository.findAll();  
    }
    public void setUserTest(){
        System.out.println("Teste");
    }
    public List<CrudModel> returnEntity(){
        List<CrudModel> modelTest = new ArrayList<CrudModel>() ;
        CrudModel crudEntity = new CrudModel(1, "name", "email", "number",
         "cpf", "2000-05-12" , "street", 
        "streetNum", "district", "city", "state", "cep");
        modelTest.add(crudEntity);
        CrudModel crudEntity1 = new CrudModel(2, "nome", "email22", "12number",
         "c123pf", "2000-05-12" , "street", 
        "stree445tNum", "dist645rict", "c756ity", "sta756te", "c756ep");
        modelTest.add(crudEntity1);
        return modelTest;
    }
}
