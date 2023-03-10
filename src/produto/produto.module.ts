import { UsuarioExisteValidator } from 'src/usuario/validacao/usuario-existe.validator';
import { ProdutoController } from './produto.controller';
import { Module } from "@nestjs/common";
import { ProdutorRepository } from './produto.repository';
import { UsuarioRepository } from 'src/usuario/usuario.repository';



@Module({
    imports: [],
    controllers: [ProdutoController],
    providers: [ProdutorRepository, UsuarioExisteValidator, UsuarioRepository],
})

export class ProdutoModule{}