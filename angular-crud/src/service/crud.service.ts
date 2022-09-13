import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudDto } from "src/model/crud.dto";


@Injectable()
export class CrudService {
    API_CONFIG = "localhost:8080";
    constructor(private http: HttpClient) { }

    getUserById(id: Number) {
        let response = this.http.get<JSON>(`${this.API_CONFIG}/user/${id}`);
        return response;
    }
    getAll() {
        // let responseAll=this.http.get<JSON>(`${this.API_CONFIG}/user/list`);
        // return responseAll;
        console.log("teste");
    }
    setUser(crud: CrudDto) {
        let responseAll = this.http.post<JSON>(`${this.API_CONFIG}/user`, crud);
    }

}

