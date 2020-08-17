export class Sprint {
    constructor(
        public id?: number, 
        public nome?: string, 
        public dataInicio?: Date, 
        public dataTermino?: Date, 
        public impedimento?: Boolean, 
        public prazo?: Date, 
        public idStatus?: number,
        public idOrdemServico?: number
    ) {}
}