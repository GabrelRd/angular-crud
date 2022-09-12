import {HttpClient} from "@angular/common/http"
import { CrudDto } from "src/model/crud.dto";

export class CrudService{

    API_CONFIG = "localhostexample";
    constructor(private http:HttpClient){       
    }

    getUserById(id:Number){
        let response=this.http.get<JSON>(`${this.API_CONFIG}/user/${id}`);
        return response;
    }
    getAll(){
        let responseAll=this.http.get<JSON>(`${this.API_CONFIG}/user/list`);
        return responseAll;
    }
    setUser(crud:CrudDto){
        let responseAll=this.http.post<JSON>(`${this.API_CONFIG}/user`,crud);
    }
        
    }
