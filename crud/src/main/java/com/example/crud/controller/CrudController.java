package com.example.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.service.CrudService;
import com.example.crud.model.CrudModel;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CrudController {
    @Autowired
    private CrudService crudService;

    @GetMapping("/user/list")
    public ResponseEntity<List<CrudModel>> getUserTest(){
        System.out.println("Testando comunicação");
        return ResponseEntity.status(HttpStatus.OK).body(crudService.returnEntity());
    }
    @PostMapping("/user/upload")
    public ResponseEntity<?> setUserTest(){
        this.crudService.setUserTest();
        return ResponseEntity.status(HttpStatus.OK).body("Test works well");
    }
}
