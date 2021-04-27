import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PerfilModel } from "src/app/models/perfil.model";
import { environment } from "src/environments/environment";

@Injectable()
export class PerfilService implements Resolve<PerfilModel> {
    constructor(private http: HttpClient) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PerfilModel | Observable<PerfilModel> | Promise<PerfilModel> {
        return this.getPerfilById(route.params.id);
    }

    baseUrl(): string {
        return '/perfil';
    }

    getPerfis(): Observable<PerfilModel[]> {
        return this.http.get<PerfilModel[]>(environment.api + this.baseUrl());
    }

    getPerfilById(id): Observable<PerfilModel> {
        return this.http.get<PerfilModel>(environment.api + this.baseUrl() + `/${id}`);
    }

    savePerfil(form): Observable<PerfilModel> {
        return this.http.post<PerfilModel>(environment.api + this.baseUrl(), form);
    }

    updatePerfil(id, form): Observable<PerfilModel> {
        return this.http.put<PerfilModel>(environment.api + this.baseUrl() + `/${id}`, form);
    }

    deletePerfil(id): Observable<void> {
        return this.http.delete<void>(environment.api + this.baseUrl() + `/${id}`);
    }
}