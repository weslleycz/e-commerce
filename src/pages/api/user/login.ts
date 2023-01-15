import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import * as Next from "next";
import {
    Body,
    createHandler,
    Post,
    Res,
    ValidationPipe,
} from "next-api-decorators";
import { LoginDto } from "../../../dtos/user/login.dto";
import { prismaClient } from "../../../services/prismaClient";
class UserHandler {
    @Post()
    public async handle(
        @Body(ValidationPipe)
        body: LoginDto,
        @Res() res: Next.NextApiResponse
    ) {
        const { email, password } = body;
        try {
            const user = await prismaClient.user.findUnique({
                where: {
                    email,
                },
                select: {
                    id: true,
                    password: true,
                },
            });
            if (!user) {
                return res.status(400).json({
                    message: "e-mail não cadastrado",
                });
            }
            if (await compare(password, user.password)) {
                if (process.env.TOKEN_KAY) {
                    return res.status(200).json({
                        token: sign({ data: user.id }, process.env.TOKEN_KAY, {
                            expiresIn: "24h",
                        }),
                    });
                }
            } else {
                return res.status(400).json({
                    message: "Senha incorreta",
                });
            }
        } catch (error) {
            return res.status(400).json({ status: error, has_error: true });
        }
    }
}

export default createHandler(UserHandler);
