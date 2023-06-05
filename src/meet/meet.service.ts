import { Injectable , Logger} from '@nestjs/common';
import { SchemaMeet , MeetDocument} from './schema/modelMeet.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { createMeet } from './dto/createMeet.dto';
import { UserServices } from 'src/user/user.services';

@Injectable()
export class MeetService{
    private readonly looger = new Logger(MeetService.name);
    constructor(
        @InjectModel(SchemaMeet.name) private readonly model = Model<MeetDocument>,
        private readonly serviceUser = UserServices
    ){}

    async GetMeetsByUser(userId: string){
        this.looger.debug('GetMeetsByUser - ', userId);
        return await this.model.find({user: userId})
    }
} 
