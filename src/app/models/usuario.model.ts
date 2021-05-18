import { PerfilModel } from "./perfil.model";

export class UsuarioModel {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    telefone: string;
    email: string;
    quantidadePontos: number;
    situacao: boolean;
    perfis: PerfilModel[];
}