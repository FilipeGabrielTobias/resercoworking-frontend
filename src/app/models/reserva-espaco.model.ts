export class ReservaEspacoModel {
    id: number;
    dataInicial: Date;
    dataFinal: Date;
    horaInicial: Date;
    horaFinal: Date;
    valorTotal: number = 0;
    quantidadePontosTotal: number = 0;
    formaPagamento: string;
    situacaoReservaEspaco: string = 'RESERVADO';
    espaco: EspacoSubModel;
    // usuarioReservou: UsuarioSubModel
    // feedbackEspaco: FeedbackSubModel
}

export class EspacoSubModel {
    id: number;
    nome: string;
    valorHora: number;
    quantidadePontos: number;
}