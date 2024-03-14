import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { constants } from './Admin/admin.user';

@Module({
  imports:[
    JwtModule.register({
    global: true,
    secret: constants.JWT_SECRET_ID,
    signOptions: { expiresIn: '60s' },
  }),
],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
