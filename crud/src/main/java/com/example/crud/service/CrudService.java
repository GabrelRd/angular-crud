package com.example.crud.service;

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
}
