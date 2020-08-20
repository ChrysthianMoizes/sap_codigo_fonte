import { TipoStatus } from './tipo-status.model';
import { OrdemServico } from './ordem-servico.model';

export class Sprint {

    constructor(
        public id?: number,
        public nome?: string,
        public dataInicio?: Date,
        public dataTermino?: Date,
        public pontosFuncao?: number,
        public impedimento?: boolean,
        public prazo?: boolean,
        public idStatus?: TipoStatus,
        public idOrdemServico?: OrdemServico,
    ) { }

}
