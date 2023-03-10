import { AtualizaUsuarioDTO } from './dto/AtualizaUsuarioDTO';
import { UsuarioEntity } from './usuario.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuarioDTO';
import { UsuarioRepository } from './usuario.repository';
import { ListarUsuariosDTO } from './dto/ListaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository){}
    
    @Post()
    async criaUsuario(@Body() dadosDoUsuaio: CriaUsuarioDTO){

        const usuarioEntity = new UsuarioEntity();

        usuarioEntity.nome = dadosDoUsuaio.nome;
        usuarioEntity.email = dadosDoUsuaio.email;
        usuarioEntity.senha = dadosDoUsuaio.senha;

        this.usuarioRepository.salvar(usuarioEntity);
        return {
            usuario: new ListarUsuariosDTO(
                usuarioEntity.id,
                usuarioEntity.nome,
                usuarioEntity.email
            ),
            message: "Usuário cadastrado com sucesso!"
        }
    }

    @Get()
    async listUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listarUsuarios();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListarUsuariosDTO(
                usuario.id,
                usuario.nome,
                usuario.email
            )
        );

        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO){
       const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

       return {
            usuario: usuarioAtualizado,
            message: 'usuário atualizado com sucesso'
       }
    }

    @Delete('/:id')
    async deletarUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO){
       const usuarioAtualizado = await this.usuarioRepository.deletar(id);

       return {
            usuario: usuarioAtualizado,
            message: 'usuário deletado com sucesso'
       }
    }


}