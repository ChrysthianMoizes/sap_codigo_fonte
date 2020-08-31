import { OrdemServico } from "./ordem-servico.model";

export class Projeto {

    constructor(
        public id?: number,
        public nome?: string,
        public idCliente?: number,
        public idLider?: number,
        public testador?: string,
        public revisor?: string,
        public gerente?: string,
        public listaOs?: OrdemServico[]
    ) {
        this.listaOs = [];
     }

}
