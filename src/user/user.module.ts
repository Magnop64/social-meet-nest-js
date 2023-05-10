import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SchemaUser, user } from "./schema/user.schema";
import { UserServices } from "./user.services";

@Module({
    imports : [MongooseModule.forFeature([{name : user.name, schema : SchemaUser}])],
    controllers : [],
    providers : [UserServices],
    exports : [MongooseModule, UserServices]
})


export class moduleUser {}