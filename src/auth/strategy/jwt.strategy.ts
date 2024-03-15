import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { admin, jwtConstants } from '../Admin/admin.user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.JWT_SECRET_ID,
        });
    }

    validate(payload: any) {
        try {
            const { userName, role } = payload;

            if (userName !== admin.userName && role !== admin.role) {

                throw new UnauthorizedException({ message: "Please login again...." });

            }

            return payload;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}