import { Injectable, Delete } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity){
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }

    async listarUsuarios(){
        return this.usuarios;
    }

    async existeComEmail(email: string){
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelUsuario !== undefined;
    }

    async existeUsuario(id: string){
        const usuario = this.usuarios.find(
            usuario => usuario.id === id
        );

        console.log('Usuario: ', this.usuarios);
        return usuario !== undefined;
    }

    usuarioExiste(id: string) {
        const usuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        )

        if(!usuario){
            throw new Error('Usuário não existe!');
        }

        return usuario;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>){

       const usuario = this.usuarioExiste(id);
        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id'){
                return;
            }
            usuario[chave] = valor;

            return usuario;
        });

    }

    async deletar(id: string) {
        const usuario = this.usuarioExiste(id);
        this.usuarios = this.usuarios.filter( user => user.id !== id);
        return usuario;
     }
}