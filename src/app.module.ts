import { UsuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
@Module({
  imports: [UsuarioModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
