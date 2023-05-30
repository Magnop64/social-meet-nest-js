import { Prop, Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { user } from "src/user/schema/user.schema";

@Schema()
export class SchemaMeet{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'user'})
    user: user

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    color: string;

    @Prop({required: true})
    link: string;
}