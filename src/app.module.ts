import { Module } from '@nestjs/common';
import { authModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { moduleUser } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.key_DataBase),
    authModule,
    moduleUser
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
