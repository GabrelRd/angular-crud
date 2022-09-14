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
        return modelTest;
    }
}
