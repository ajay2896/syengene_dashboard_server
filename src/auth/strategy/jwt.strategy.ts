import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { admin, jwtConstants } from '../Admin/admin.user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    /**
     * The constructor function initializes a strategy for extracting JWT from an authorization header
     * using a bearer token in TypeScript.
     */
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.JWT_SECRET_ID,
        });
    }

    /**
     * The function validates a payload by checking if the userName and role match those of an admin,
     * throwing an UnauthorizedException if they do not.
     * @param {any} payload - The `validate` function takes a `payload` object as a parameter. The
     * function attempts to destructure the `userName` and `role` properties from the `payload` object.
     * It then checks if the `userName` and `role` values are not equal to the `admin.userName` and
     * @returns The `payload` is being returned if the conditions in the `if` statement are not met.
     */
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