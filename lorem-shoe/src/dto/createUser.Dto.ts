import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    photo: string;

    salt: string;
}