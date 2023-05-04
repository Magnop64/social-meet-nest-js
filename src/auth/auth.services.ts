import { BadRequestException, Injectable} from "@nestjs/common";
import { loginDto } from "./dtos/login.dto";
import { messegeHelp } from "./helpers/messenges.helper";

@Injectable()
export class authService{

    login(dto : loginDto){
        if(dto.login != 'user@user.com' || dto.password != 'user123'){
            throw new BadRequestException(messegeHelp.auth_password_or_login_not_faund);
        }
        return dto;
    }
}