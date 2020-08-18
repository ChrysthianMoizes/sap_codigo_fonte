import { Lider } from './lider.model';
import { Cliente } from './cliente.model';

export class Projeto {

    constructor(
        public id?: number,
        public nome?: string,
        public cliente?: Cliente,
        public lider?: Lider,
        public testador?: string,
        public revisor?: string,
        public gerente?: string
    ) { }
    
}
