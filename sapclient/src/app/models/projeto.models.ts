export class Projeto{
    constructor(
        public id?: number, 
        public nome?: String,
        public idLider?: number,
        public idCliente?: number,
        public testador?: String,
        public revisor?: String,
        public gerente?: String
    ){}
}