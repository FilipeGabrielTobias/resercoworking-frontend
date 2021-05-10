import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ModalidadeEspacoModel } from "../../models/modalidade-espaco.model";

@Injectable()
export class ModalidadeEspacoService implements Resolve<ModalidadeEspacoModel> {
    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ModalidadeEspacoModel | Observable<ModalidadeEspacoModel> | Promise<ModalidadeEspacoModel> {
        return this.getModalidadeEspacoById(route.params.id);
    }

    baseUrl(): string {
        return '/modalidadeEspaco';
    }

    getModalidadeEspacoById(id: number): Observable<ModalidadeEspacoModel> {
        return this.http.get<ModalidadeEspacoModel>(environment.api + this.baseUrl() + `/${id}`);
    }

    getModalidadesEspaco(): Observable<ModalidadeEspacoModel[]> {
        return this.http.get<ModalidadeEspacoModel[]>(environment.api + this.baseUrl());
    }

    saveModalidadeEspaco(form: any): Observable<ModalidadeEspacoModel> {
        return this.http.post<ModalidadeEspacoModel>(environment.api + this.baseUrl(), form);
    }

    updateModalidadeEspaco(id: number, form: any): Observable<ModalidadeEspacoModel> {
        return this.http.put<ModalidadeEspacoModel>(environment.api + this.baseUrl() + `/${id}`, form);
    }

    deleteModalidadeEspaco(id: number): Observable<void> {
        return this.http.delete<void>(environment.api + this.baseUrl() + `/${id}`);
    }
}