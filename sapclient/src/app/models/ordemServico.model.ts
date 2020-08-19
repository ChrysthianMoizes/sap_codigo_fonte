import { Projeto } from "./projeto.model";
import { TipoSituacao } from './tiposituacao.model';
import { Sprint } from './sprint.model';

export class OrdemServico{
    constructor(
        public id?: number,
        public nome?: string,
        public dataProximaEntrega?: Date,
        public prazo?: Date,
        public qtdDefeitosClientes?: number,
        public qtdDefeitosInterno?: number,        
        public pontosFuncao?: number,
        public fabrica?: string,
        public projeto?: Projeto,
        public situacao?: TipoSituacao,
        public sprints?: Sprint[],
    ){ }
}