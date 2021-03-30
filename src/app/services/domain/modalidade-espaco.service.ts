import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ModalidadeEspacoModel } from "../../models/modalidade-espaco.model";

@Injectable()
export class ModalidadeEspacoService {
    constructor(private http: HttpClient) {
    }

    baseUrl(): string {
        return '/modalidadeEspaco';
    }

    getModalidadeEspacoById(id): Observable<ModalidadeEspacoModel> {
        return this.http.get<ModalidadeEspacoModel>(environment.api + this.baseUrl() + `/${id}`);
    }

    getModalidadesEspaco(): Observable<ModalidadeEspacoModel[]> {
        return this.http.get<ModalidadeEspacoModel[]>(environment.api + this.baseUrl());
    }

    saveModalidadeEspaco(form): Observable<ModalidadeEspacoModel> {
        return this.http.post<ModalidadeEspacoModel>(environment.api + this.baseUrl(), form);
    }

    updateModalidadeEspaco(id, form): Observable<ModalidadeEspacoModel> {
        return this.http.put<ModalidadeEspacoModel>(environment.api + this.baseUrl() + `/${id}`, form);
    }

    deleteModalidadeEspaco(id): Observable<void> {
        return this.http.delete<void>(environment.api + this.baseUrl() + `/${id}`);
    }
}