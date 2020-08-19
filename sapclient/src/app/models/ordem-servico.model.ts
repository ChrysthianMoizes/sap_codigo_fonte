import { Projeto } from './projeto.model';
import { TipoSituacao } from './tipo-situacao.model';
import { Sprint } from './sprint.model';

export class OrdemServico {

    constructor(
        public id?: number,
        public nome?: string,
        public projeto?: Projeto,
        public situacao?: TipoSituacao,
        public dtProximaEntrega?: Date,
        public qtdDefeitosClientes?: number,
        public qtdDefeitosInternos?: number,
        public prazoEntrega?: Date,
        public qtdPontosFuncao?: number,
        public fabrica?: string,
        public sprints?: Sprint[]
    ) { }
    
}
