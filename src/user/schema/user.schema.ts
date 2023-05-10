import { Schema , Prop , SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DocumentUser = HydratedDocument<user>;

@Schema()
export class user {
    @Prop({required : true})
    name : string;

    @Prop({required : true})
    email : string;

    @Prop({required : true })
    password : string;

    @Prop()
    avatar : string;
}

export const SchemaUser = SchemaFactory.createForClass(user);