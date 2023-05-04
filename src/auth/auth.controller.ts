import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { authService } from "./auth.services";
import { loginDto } from "./dtos/login.dto";

@Controller("auth")
export class authController {
    constructor(private readonly authServices : authService){}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dto : loginDto){
        return this.authServices.login(dto);
    }
}