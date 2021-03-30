import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PerfilModel } from "src/app/models/perfil.model";
import { environment } from "src/environments/environment";

@Injectable()
export class PerfilService {
    constructor(private http: HttpClient) {}

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