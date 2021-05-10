import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EspacoResumoModel } from "src/app/models/espaco-resumo.model";
import { EspacoModel } from "src/app/models/espaco.model";
import { environment } from "src/environments/environment";

@Injectable()
export class EspacoService implements Resolve<EspacoModel> {
    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EspacoModel | Observable<EspacoModel> | Promise<EspacoModel> {
        return this.getEspacoById(route.params.id);
    }

    baseUrl(): string {
        return '/espaco';
    }

    getEspacoById(id: number): Observable<EspacoModel> {
        return this.http.get<EspacoModel>(environment.api + this.baseUrl() + `/${id}`);
    }

    getEspacos(): Observable<EspacoResumoModel[]> {
        return this.http.get<EspacoResumoModel[]>(environment.api + this.baseUrl());
    }

    saveEspaco(form: any): Observable<EspacoModel> {
        return this.http.post<EspacoModel>(environment.api + this.baseUrl(), form);
    }

    updateEspaco(id: number, form: any): Observable<EspacoModel> {
        return this.http.put<EspacoModel>(environment.api + this.baseUrl() + `/${id}`, form);
    }

    deleteEspaco(id: number): Observable<void> {
        return this.http.delete<void>(environment.api + this.baseUrl() + `/${id}`);
    }
}