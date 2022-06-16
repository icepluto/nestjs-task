import { IsNotEmpty } from 'class-validator'
export class CreateTaskDto {
    @IsNotEmpty()
    username:string;
    
    @IsNotEmpty()
    password:string;
}
