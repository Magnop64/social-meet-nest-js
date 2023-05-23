import { Controller, Get, Request, BadRequestException } from '@nestjs/common';
import { UserServices } from './user.services';
import { messageUserhelper } from './helpers/user.helpers';

@Controller('user')
export class userController{
     constructor(private readonly userService: UserServices){}

     @Get()
     async getUser(@Request() req : any){
        const {userId} = req?.user;

        const user = await this.userService.getUserById(userId);
        if(!user){
            throw new BadRequestException(messageUserhelper.USER_NOT_FAUND);
        }
        return{
            nome : user.name,
            email : user.email,
            avatar : user.avatar,
            id : user._id.toString()
        }
    
    }
}