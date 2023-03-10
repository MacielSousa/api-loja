import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutorRepository{
    private produtos = [];

    async salvar(produto){
        this.produtos.push(produto);
        console.log(this.produtos);
    }

    async listarProdutos(){
        return this.produtos;
    }

}