import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CrudDto } from "src/model/crud.dto";


@Injectable()
export class CrudService {
    API_CONFIG = "http://localhost:8080";
    constructor(private http: HttpClient) { }

    getUserById(id: Number) {
        let response = this.http.get<JSON>(`${this.API_CONFIG}/user/${id}`);
        return response;
    }
    // getAll():  Observable<CrudDto> {
    //     // let response = this.http.get<JSON>(`${this.API_CONFIG}/user/list`);
    //     console.log("Testeee");
    //     let response = this.http.get<CrudDto>(`${this.API_CONFIG}/user/list`);
    //     response.subscribe();
    //     console.log(response);
    //     return response;
    // }
    getAll() {
        // let response = this.http.get<JSON>(`${this.API_CONFIG}/user/list`);
        console.log("Testeee");
        let response = this.http.get<JSON>(`${this.API_CONFIG}/user/list`).subscribe();
        return response;
    }
    setUser(crud: CrudDto) {
        let responseAll = this.http.post<JSON>(`${this.API_CONFIG}/user`, crud);
    }

}

