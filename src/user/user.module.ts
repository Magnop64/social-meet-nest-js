import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SchemaUser, user } from "./schema/user.schema";
import { UserServices } from "./user.services";
import { userController } from "./user.controller";

@Module({
    imports : [MongooseModule.forFeature([{name : user.name, schema : SchemaUser}])],
    controllers : [userController],
    providers : [UserServices],
    exports : [MongooseModule, UserServices]
})


export class moduleUser {}