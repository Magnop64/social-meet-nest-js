import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { moduleUser } from "src/user/user.module";
import { MeetController } from "./meet.controller";
import { Meet, SchemaMeet } from "./schema/modelMeet.schema";
import { meetServices } from "./meet.service";

@Module({
  imports: [ moduleUser, MongooseModule.forFeature([{name: Meet.name, schema: SchemaMeet}])],
  controllers: [MeetController],
  providers: [ meetServices],
  exports: [MongooseModule, meetServices]
})

export class meetModule {}