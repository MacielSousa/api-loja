import { v4 as uuidv4 } from 'uuid';
export class UsuarioEntity {
    id: string;
    nome: string;
    email: string;
    senha: string;
    
    constructor(){
        this.id = uuidv4();
    }
}