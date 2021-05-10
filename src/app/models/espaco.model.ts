export class EspacoModel {
    id: number;
    nome: string;
    descricao: string;
    metrosQuadrados: number;
    pontos: number;
    nota: number;
    situacao: boolean = true;
    modalidadeEspaco: ModalidadeEspaco;
}

export class ModalidadeEspaco {
    id: number;
    nome: string;
}