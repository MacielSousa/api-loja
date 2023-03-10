import { CriaProdutoDTO } from './dto/produtoDTO';
import { Body, Post, Get, Controller } from '@nestjs/common';
import { ProdutorRepository } from './produto.repository';

@Controller("/produtos")
export class ProdutoController{
    constructor(private produtoRepository: ProdutorRepository){}

    @Post()
    async cadastrarProduto(@Body() dadosProduto: CriaProdutoDTO){
        this.produtoRepository.salvar(dadosProduto);
    }

    @Get()
    async listarProdutos(){
        return this.produtoRepository.listarProdutos();
    }
}