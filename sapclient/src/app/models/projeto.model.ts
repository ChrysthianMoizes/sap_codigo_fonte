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
}
