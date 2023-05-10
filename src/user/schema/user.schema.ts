import { Schema , Prop , SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DocumentUser = HydratedDocument<user>;

@Schema()
export class user {
    @Prop({required  : true})
    name : string;

    @Prop({required : true})
    Email : string;

    @Prop({required : true })
    passWord : string;

    @Prop()
    avatar : string;
}

export const SchemaUser = SchemaFactory.createForClass(user);