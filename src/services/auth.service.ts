import { Injectable } from '@angular/core';
import { CredenciasDTO } from 'src/models/credencias.dto';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { text } from '@angular/core/src/render3';
import { LocalUser } from 'src/models/local_user';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService{

    constructor(private http: HttpClient, public storage: StorageService){

    }

    authenticate(creds: CredenciasDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`, 
        creds,
        {
            observe:'response', //pega o header da resposta 
            responseType: 'text' //evita erro de parse
        });
    }

    successfullLogin(authorizationValue: string){
        let tok =authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}