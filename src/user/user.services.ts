import {Model} from 'mongoose';
import { Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { user, DocumentUser } from './schema/user.schema';
import { cadastroDto } from './dtos/user.dto';
import  * as Cryptojs from 'crypto-js';

@Injectable()
export class UserServices {
    constructor(@InjectModel(user.name) private userModel : Model<DocumentUser> ){}

    async create (dto : cadastroDto){
        dto.password = Cryptojs.AES.encrypt(dto.password, process.env.key_Crypto).toString();

        const createdUser = new this.userModel(dto);
        await createdUser.save();
    }

    async existByEmail(email : string) : Promise<boolean>{
        const result = await this.userModel.findOne({email});

        if(result){
            return true;
        }
        return false;
    }

}