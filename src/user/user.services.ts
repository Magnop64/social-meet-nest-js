import {Model} from 'mongoose';
import { Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { user, DocumentUser } from './schema/user.schema';
import { cadastroDto } from './dtos/user.dto';
import  * as CryptoJS from 'crypto-js';

@Injectable()
export class UserServices {
    constructor(@InjectModel(user.name) private userModel : Model<DocumentUser> ){}

    async create (dto : cadastroDto){
        dto.password = CryptoJS.AES.encrypt(dto.password, process.env.key_Crypto).toString();

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

    async GetUserByLoginPassword(email: string, password: string): Promise < DocumentUser | null>{
        const result = await this.userModel.find({email});

        if(result && result.length > 0){
            const user = result[0] as DocumentUser;

            const bytesPassword = CryptoJS.AES.decrypt(user.password, process.env.KEY_JWT_CRYPTO);

            const passwordSavad = bytesPassword.toString(CryptoJS.enc.Utf8);

            if(user.password === passwordSavad){
                return user;
            }
        }
        return null
    }

    async getUserById(id : string){
        return this.userModel.findOne({_id : id});
    }
}