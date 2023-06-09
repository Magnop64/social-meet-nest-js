import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Meet, MeetDocument } from "./schema/modelMeet.schema";
import { createMeet } from "./dto/createMeet.dto";
import { UserServices } from "src/user/user.services";
import { GenerateLink } from "./helper/linkGenerate.helper";

@Injectable()
export class MeetServices{
    private readonly logger = new Logger(MeetServices.name);

    constructor(
        @InjectModel(Meet.name) private meetModel: Model<MeetDocument>,
        private readonly userSevice: UserServices
    ){}
    
    async GetMeetByUser(userId:string){
        this.logger.debug(`GetMeetByUser - ${userId}`);
        return await this.meetModel.find({user: userId});
    }

    async CreateMeet(userId:string, dto:createMeet){
        this.logger.debug(`CreateMeet - ${userId}`)
        
        const user = await this.userSevice.getUserById(userId);

         const meet = [{
            ...dto,
            user,
            link: GenerateLink()
         }];

        const createdMeet = new this.meetModel(meet);
        return await createdMeet.save();
    }

    async DeleteMeet(userId: string, meetId:string){
        this.logger.debug(`DeleteMeet - ${userId} - ${meetId}`);
        return await this.meetModel.deleteOne({user: userId, _id: meetId});
    }
}