import { Projeto } from './projeto.model';
import { TipoSituacao } from './tipo-situacao.model';
import { Sprint } from './sprint.model';

export class OrdemServico {

    constructor(
        public id?: number,
        public nome?: string,
        public projeto?: Projeto,
        public situacao?: TipoSituacao,
        public dataProximaEntrega?: Date,
        public qtdDefeitosCliente?: number,
        public qtdDefeitosInterno?: number,
        public prazo?: Date,
        public pontosFuncao?: number,
        public fabrica?: string,
        public sprints?: Sprint[],
    ) { }
    
}