export class EspacoModel {
    id: number;
    nome: string;
    descricao: string;
    metrosQuadrados: number;
    quantidadePontos: number;
    nota: number = 0;
    situacao: boolean = true;
    modalidadeEspaco: ModalidadeEspaco;
}

export class ModalidadeEspaco {
    id: number;
    nome: string;
}