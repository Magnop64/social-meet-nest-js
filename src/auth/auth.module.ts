import { Module } from '@nestjs/common';
import { authController } from './auth.controller';
import { authService } from './auth.services';

@Module({
    imports: [],
    controllers: [authController],
    providers: [authService]
})

export class authModule{}