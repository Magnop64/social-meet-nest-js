import { Module } from '@nestjs/common';
import { authController } from './auth.controller';
import { authService } from './auth.services';
import { moduleUser } from 'src/user/user.module';

@Module({
    imports: [moduleUser],
    controllers: [authController],
    providers: [authService]
})

export class authModule{}