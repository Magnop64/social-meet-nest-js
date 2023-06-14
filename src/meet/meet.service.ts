import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Meet, MeetDocument } from "./schema/modelMeet.schema";
import { createMeet } from "./dto/createMeet.dto";
import { UserServices } from "src/user/user.services";
import { GenerateLink } from "./helper/linkGenerate.helper";

@Injectable()
export class meetServices{
    private readonly logger = new Logger(meetServices.name);

    constructor(
        @InjectModel(Meet.name) private model: Model<MeetDocument>,
        private readonly userSevice: UserServices
    ){}
    
    async GetMeetByUser(userId:string){
        this.logger.debug(`GetMeetByUser - ${userId}`);
        return await this.model.find({user: userId});
    }

    async CreateMeet(userId:string, dto:createMeet){
        this.logger.debug(`CreateMeet - ${userId}`)
        
        const user = await this.userSevice.getUserById(userId);
         const meet = {
            ...dto,
            user,
            link: GenerateLink()
         };

        const createdMeet = new this.model(meet);
        await createdMeet.save();
    }

    async DeleteMeet(userId: string, meetId:string){
        this.logger.debug(`DeleteMeet - ${userId} - ${meetId}`);
        return await this.model.deleteOne({user: userId, _id: meetId});
    }
}