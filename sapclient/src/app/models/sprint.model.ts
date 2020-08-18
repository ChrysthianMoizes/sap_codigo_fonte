import { TipoStatus } from './tipo-status.model';
import { OrdemServico } from './ordem-servico.model';

export class Sprint {

    constructor(
        public id?: number,
        public nome?: string,
        public dtInicio?: Date,
        public dtTermino?: Date,
        public qtdPontosFuncao?: number,
        public impedimento?: boolean,
        public noPrazo?: boolean,
        public status?: TipoStatus,
        public ordemServico?: OrdemServico
    ) { }
    
}
