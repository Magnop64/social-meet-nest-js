import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { user } from "src/user/schema/user.schema";

export type MeetDocument = HydratedDocument<SchemaMeet>;

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

export const MeetSchema = SchemaFactory.createForClass(SchemaFactory);