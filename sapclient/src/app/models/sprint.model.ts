<<<<<<< HEAD
import { OrdemServico } from './ordemServico.model';
import { TipoStatus } from './tipostatus.model';

export class Sprint{
=======
import { TipoStatus } from './tipo-status.model';
import { OrdemServico } from './ordem-servico.model';

export class Sprint {

>>>>>>> 04fe21abc2a119925bbd3f4c7d45625b751846af
    constructor(
        public id?: number,
        public nome?: string,
        public dataInicio?: Date,
        public dataTermino?: Date,
        public pontosFuncao?: number,
        public impedimento?: boolean,
<<<<<<< HEAD
        public prazo?: boolean,
        public status?: TipoStatus,
        public ordemServico?: OrdemServico,        
    ){}
=======
        public noPrazo?: boolean,
        public status?: TipoStatus,
        public ordemServico?: OrdemServico,
    ) { }
    
>>>>>>> 04fe21abc2a119925bbd3f4c7d45625b751846af
}
