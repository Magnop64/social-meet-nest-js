import { Controller , Get, Request, Post, Body, Delete, Param} from '@nestjs/common';
import { MeetServices } from './meet.service';
import { GetMeet } from './dto/getMeet.dto';
import { createMeet } from './dto/createMeet.dto';


@Controller('meet')
export class MeetController {
    constructor(
        private readonly meetService: MeetServices
    ){}

    @Get()
    async getUser(@Request() req){
        const { userId } = req?.user
        console.log(userId)
        const result = await  this.meetService.GetMeetByUser(userId);

        return result?.map((meet) => ({
            id: meet._id.toString(),
            name: meet.name,
            color: meet.color,
            link: meet.link
        }) as GetMeet);
    }

    @Post()
    async createdMeet(@Request() req, @Body() dto: createMeet){
        const { userid } = req?.user;
        await this.meetService.CreateMeet(userid, dto);
    }

    @Delete(':id')
    async DeleteMeet(@Request() req, @Param() params){
         const { userId } = req?.user;
         const { id } = params;

         await this.meetService.DeleteMeet(userId, id);
    }
}
