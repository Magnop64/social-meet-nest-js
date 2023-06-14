import { Controller , Get, Request, Post, Body, Delete, Param} from '@nestjs/common';
import { meetServices } from './meet.service';
import { GetMeet } from './dto/getMeet.dto';
import { createMeet } from './dto/createMeet.dto';
import { UserServices } from 'src/user/user.services';


@Controller('meet')
export class MeetController {
    constructor(
        private readonly service: meetServices,
        private readonly userSevice: UserServices
    ){}

    @Get()
    async getUser(@Request() req){
        const { userId } = req?.user
        const result = await  this.service.GetMeetByUser(userId);
        return result?.map((meet) => ({
            id: meet._id.toString(),
            name: meet.name,
            color: meet.color,
            link: meet.link
        }) as GetMeet);
    }

    @Post()
    async createdMeet(@Request() req, @Body() dto: createMeet){
        const { userId } = req?.user;
        return await this.service.CreateMeet(userId, dto);
    }

    @Delete(':id')
    async DeleteMeet(@Request() req, @Param() params){
         const { userId } = req?.user;
         const { id } = params;

         await this.service.DeleteMeet(userId, id);
    }
}
