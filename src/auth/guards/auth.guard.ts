import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { constants } from "../Admin/admin.user";





// export class AuthGuard implements CanActivate {

//     constructor(private jwtService: JwtService) { }

//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const request = context.switchToHttp().getRequest();
//         const token: any = this.extractTokenFromHeader(request);
//         if (!token) {
//             throw new UnauthorizedException();
//         }
//         try {
//             const payload = await this.jwtService.verifyAsync(token, { secret: constants.JWT_SECRET_ID });
//             // 💡 We're assigning the payload to the request object here
//             // so that we can access it in our route handlers
//             request['user'] = payload;
//         } catch {
//             throw new UnauthorizedException();
//         }
//         return true;
//     }
    
//     private extractTokenFromHeader(request: Request): string | undefined {
//         const [type, token] = request.headers.authorization?.split(' ') ?? [];
//         return type === 'Bearer' ? token : undefined;
//     }

// }