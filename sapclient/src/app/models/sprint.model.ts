import { OrdemServico } from './ordemServico.model';
import { TipoStatus } from './tipostatus.model';

export class Sprint{
    constructor(
        public id?: number,
        public nome?: string,
        public dataInicio?: Date,
        public dataTermino?: Date,
        public pontosFuncao?: number,
        public impedimento?: boolean,
        public prazo?: boolean,
        public status?: TipoStatus,
        public ordemServico?: OrdemServico,        
    ){}
}
