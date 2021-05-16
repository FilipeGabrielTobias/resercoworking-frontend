import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ReservaEspacoResumoModel } from "src/app/models/reserva-espaco-resumo.model";
import { ReservaEspacoModel } from "src/app/models/reserva-espaco.model";
import { environment } from "src/environments/environment";

@Injectable()
export class ReservaEspacoService implements Resolve<ReservaEspacoModel> {

    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ReservaEspacoModel | Observable<ReservaEspacoModel> | Promise<ReservaEspacoModel> {
        return this.getReservaEspacoById(route.params.id);
    }

    baseUrl(): string {
        return '/reserva-espaco';
    }

    getReservaEspacoById(id: number): Observable<ReservaEspacoModel> {
        return this.http.get<ReservaEspacoModel>(environment.api + this.baseUrl() + `/${id}`);
    }

    getReservasEspaco(): Observable<ReservaEspacoResumoModel[]> {
        return this.http.get<ReservaEspacoModel[]>(environment.api + this.baseUrl());
    }

    saveReservaEspaco(form: any): Observable<ReservaEspacoModel> {
        return this.http.post<ReservaEspacoModel>(environment.api + this.baseUrl(), form);
    }

    updateReservaEspaco(id: number, form: any): Observable<ReservaEspacoModel> {
        return this.http.put<ReservaEspacoModel>(environment.api + this.baseUrl() + `/${id}`, form);
    }

    cancelarReservaEspaco(form: any): Observable<any> {
        return this.http.post<any>(environment.api + this.baseUrl() + `/cancelar-reserva`, form);
    }
}