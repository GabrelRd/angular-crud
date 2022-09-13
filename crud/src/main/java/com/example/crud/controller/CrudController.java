package com.example.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.service.CrudService;

@RestController
public class CrudController {
    @Autowired
    private CrudService crudService;

    @GetMapping("/user/list")
    public String getUserTest(){
        return "Testando";
    }
    @PostMapping("/user/upload")
    public ResponseEntity<?> setUserTest(){
        this.crudService.setUserTest();
        return ResponseEntity.status(HttpStatus.OK).body("Test works well");
    }
}
