import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { admin } from './Admin/admin.user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ) {}

    async loginUserService(loginData:LoginDTO): Promise<{ access_token: string }> {
        try {
            
            if(loginData.userName === admin.userName && loginData.password === admin.password) {


                const payload = { userName: admin.userName, role: admin.role };

                const token = await this.jwtService.signAsync(payload);

                return {
                    access_token: token
                }

            } else {
                throw new UnauthorizedException({statusCode:406,success:false,message:"Invalid username or password"});
            }

        } catch (error) {
            throw new InternalServerErrorException({statusCode:error.status,success:false,message:error.message});
        }
    }


}
