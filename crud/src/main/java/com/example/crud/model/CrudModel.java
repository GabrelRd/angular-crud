package com.example.crud.model;

import java.sql.Date;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CrudModel {
    @Id @Setter
    private int id;
    @Column(length = 200, nullable = false) @Setter @Getter
    private String name;
    @Column(length = 100, nullable = false) @Setter @Getter
    private String email;
    @Column(length = 12, nullable = false) @Setter @Getter
    private String number;
    @Column(length = 11, nullable = false) @Setter @Getter
    private String cpf;
    @Column(nullable = false) @Setter @Getter
    private String birthDate;
    @Column(length = 200, nullable = false) @Setter @Getter
    private String street;
    @Column(length = 200, nullable = false) @Setter @Getter
    private String streetNum;
    @Column(length = 50, nullable = false) @Setter @Getter
    private String district;
    @Column(length = 4, nullable = false) @Setter @Getter
    private String city;
    @Column(length = 2, nullable = false) @Setter @Getter
    private String state;
    @Column(length = 8, nullable = false) @Setter @Getter
    private String cep;

    
    

}

