import { BadRequestException, Injectable, Logger} from "@nestjs/common";
import { loginDto } from "./dtos/login.dto";
import { messegeHelp } from "./helpers/messenges.helper";
import { UserServices } from "src/user/user.services";
import { cadastroDto } from "src/user/dtos/user.dto";
import { messageUserhelper } from "src/user/helpers/user.helpers";

@Injectable()
export class authService{

    private logger = new Logger(authService.name);

    constructor(private readonly useService : UserServices){}

    login(dto : loginDto){
        this.logger.debug('login - started')

        if(dto.login != 'user@user.com' || dto.password != 'user123'){
            throw new BadRequestException(messegeHelp.auth_password_or_login_not_faund);
        }
        return dto;
    }

    async register(dto: cadastroDto){
        this.logger.debug('register - started')
        if(await this.useService.existByEmail(dto.email)){
            throw new BadRequestException(messageUserhelper.EXIST_EMAIL_ACONT)
        }

        await this.useService.create(dto);
    }
}