import { Module } from '@nestjs/common';
import { authModule } from './auth/auth.module';

@Module({
  imports: [authModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
