import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UsuarioModel } from "../../models/usuario.model";

@Injectable()
export class UsuarioService {
    constructor(private http: HttpClient) {}

    baseUrl(): string {
        return '/usuario';
    }

    getUsuarios(): Observable<UsuarioModel[]> {
        return this.http.get<UsuarioModel[]>(environment.api + this.baseUrl());
    }

    saveUsuario(form): Observable<UsuarioModel> {
        return this.http.post<UsuarioModel>(environment.api + this.baseUrl(), form);
    }
}