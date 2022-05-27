import {IsNumber, IsString, MaxLength, Min} from 'class-validator';

export class UpdateDogDto {
    @IsString()
    @MaxLength(500)
    name: string;

    @IsNumber()
    @Min(0)
    age: number;
}