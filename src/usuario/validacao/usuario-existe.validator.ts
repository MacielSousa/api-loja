import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";

@Injectable()
@ValidatorConstraint({async: true})
export class UsuarioExisteValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository){ }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioRepository.existeUsuario(value);
        return usuarioComEmailExiste;
    }
}

export const UsuarioExiste = (opcoesDeValidacao: any) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: UsuarioExisteValidator
        });
    }
}