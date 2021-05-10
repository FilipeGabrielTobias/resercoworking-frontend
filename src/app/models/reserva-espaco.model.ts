export class ReservaEspacoModel {
    id: number;
    dataInicial: Date;
    dataFinal: Date;
    horaInicial: Date;
    horaFinal: Date;
    valorTotal: number;
    quantidadePontosTotal: number;
    formaPagamento: string;
    situacaoReservaEspaco: string;
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