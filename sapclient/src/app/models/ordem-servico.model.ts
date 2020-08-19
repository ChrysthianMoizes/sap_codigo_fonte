export class OrdemServico{

    constructor(
        public id?: number,
        public nome?:string,
        public idProjeto?: number,
        public idSituacao?: number,
        public dataProximaEntrega?: Date,
        public qtdDefeitosCliente?:number,
        public qtdDefeitosInternos?: number,
        public prazo?:Date,
        public pontosFuncao?: number,
        public fabrica?:string,
        public sprints?: object
        ){

    }

}