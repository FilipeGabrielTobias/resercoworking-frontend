import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PremiacaoModel } from "src/app/models/premiacao.model";
import { environment } from "src/environments/environment";

@Injectable()
export class PremiacaoService {
    constructor(private http: HttpClient) {}

    baseUrl(): string {
        return '/premiacao';
    }

    getPremiacoes(): Observable<PremiacaoModel[]> {
        return this.http.get<PremiacaoModel[]>(environment.api + this.baseUrl());
    }

    getPremiacaoById(id): Observable<PremiacaoModel> {
        return this.http.get<PremiacaoModel>(environment.api + this.baseUrl() + `/${id}`);
    }

    savePremiacao(form): Observable<PremiacaoModel> {
        return this.http.post<PremiacaoModel>(environment.api + this.baseUrl(), form);
    }

    updatePremiacao(id, form): Observable<PremiacaoModel> {
        return this.http.put<PremiacaoModel>(environment.api + this.baseUrl() + `/${id}`, form);
    }

    deletePremiacao(id): Observable<void> {
        return this.http.delete<void>(environment.api + this.baseUrl() + `/${id}`);
    }
}