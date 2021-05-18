import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UsuarioModel } from "../../models/usuario.model";

@Injectable()
export class UsuarioService implements Resolve<UsuarioModel> {
    constructor(private http: HttpClient) {}
    
    baseUrl(): string {
        return '/usuario';
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UsuarioModel | Observable<UsuarioModel> | Promise<UsuarioModel> {
        return this.getUsuarioById(route.params.id);
    }


    getUsuarios(): Observable<UsuarioModel[]> {
        return this.http.get<UsuarioModel[]>(environment.api + this.baseUrl());
    }

    getUsuarioById(id: number): Observable<UsuarioModel> {
        return this.http.get<UsuarioModel>(environment.api + this.baseUrl() + `/${id}`);
    }

    saveUsuario(form): Observable<UsuarioModel> {
        return this.http.post<UsuarioModel>(environment.api + this.baseUrl(), form);
    }

    updateUsuario(id: number, form: any): Observable<UsuarioModel> {
        return this.http.put<UsuarioModel>(environment.api + this.baseUrl(), form);
    }
}