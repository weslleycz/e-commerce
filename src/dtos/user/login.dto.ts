import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsNotEmpty({ message: "Você precisa informar o seu email" })
    @IsString()
    @IsEmail({}, { message: "Este não é um e-mail valido" })
    email!: string;

    @IsString()
    @IsNotEmpty({ message: "Você precisa informar a sua senha" })
    password!: string;
}
