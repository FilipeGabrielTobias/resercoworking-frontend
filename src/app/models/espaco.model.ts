export class EspacoModel {
    id: number;
    nome: string;
    descricao: string;
    metrosQuadrados: number;
    quantidadePontos: number;
    valorHora: number = 0;
    nota: number = 0.0;
    situacao: boolean = true;
    modalidadeEspaco: ModalidadeEspaco;
}

export class ModalidadeEspaco {
    id: number;
    nome: string;
}