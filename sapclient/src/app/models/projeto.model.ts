<<<<<<< HEAD
import { Cliente } from './cliente.model'
import { Lider } from './lider.model'
import { from } from 'rxjs'
export class Projeto{
    constructor(
    public id?: number,
    public nome?: string,
    public lider?: Lider,
    public cliente?: Cliente,
    public revisor?: string,
    public gerente?: string,
    ){}
=======
import { Lider } from "./lider.model";
import { Cliente } from "./cliente.model";

export class Projeto {

    constructor(
        public id?: number,
        public nome?: string,
        public idCLiente?: number,
        public idLider?: number,
        public testador?: string,
        public revisor?: string,
        public gerente?: string
    ) { }

>>>>>>> 04fe21abc2a119925bbd3f4c7d45625b751846af
}
