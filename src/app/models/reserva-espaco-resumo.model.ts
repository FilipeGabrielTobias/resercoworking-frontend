export class ReservaEspacoResumoModel {
    id: number;
    dataInicial: Date;
    dataFinal: Date;
    horaInicial: Date;
    horaFinal: Date;
    situacaoReservaEspaco: string;
    espaco: EspacoSubModel;
    // usuarioReservou: UsuarioSubModel
}

export class EspacoSubModel {
    id: number;
    nome: string;
}