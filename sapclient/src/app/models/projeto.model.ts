import { Lider } from "./lider.model";
import { Cliente } from "./cliente.model";

export class Projeto {

    constructor(
        public id?: number,
        public nome?: string,
        public id_lider?: Lider,
        public id_cliente?: Cliente,
        public testador?: string,
        public revisor?: string,
        public gerente?: string,
    ) { }
}
