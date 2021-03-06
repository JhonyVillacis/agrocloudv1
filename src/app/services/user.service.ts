import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()

export class UserService{
    public url:string;

    constructor(private _http:Http){
        this.url=GLOBAL.url;
    }

    register(user_to_register){
        let params = JSON.stringify(user_to_register);
        let headers = new Headers({'Content-Type':'application/json'});
        
        return this._http.post(this.url+'saveUser',params,{headers:headers})
        .map(res=>res.json());
    }


    signup(user_to_login, gettoken=null){
        if(gettoken !=null){
            user_to_login.gettoken=gettoken;
        }
        
        let params=JSON.stringify(user_to_login);
        let headers=new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'login',params,{headers:headers})
        .map(res=>res.json());
    }
    //metodo para cerrar sesion
    logout(){
        
    }
}