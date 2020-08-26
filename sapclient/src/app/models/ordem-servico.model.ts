import { Projeto } from './projeto.model';
import { TipoSituacao } from './tipo-situacao.model';
import { Sprint } from './sprint.model';

export class OrdemServico {

    constructor(
        public id?: number,
        public nome?: string,
        public idProjeto?: number,
        public idSituacao?: number,
        public dataProximaEntrega?: Date,
        public qtdDefeitosCliente?: number,
        public qtdDefeitosInterno?: number,
        public prazo?: Date,
        public pontosFuncao?: number,
        public fabrica?: string,
        public sprints?: Sprint[]
    ) {
        this.sprints = [];
        this.qtdDefeitosCliente = 0;
        this.qtdDefeitosInterno = 0;
    }

}
