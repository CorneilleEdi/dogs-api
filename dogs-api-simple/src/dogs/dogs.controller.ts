import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {DogsService} from './dogs.service';
import {CreateDogDto} from "./dto/create-dog.dto";
import {UpdateDogDto} from "./dto/update-dog.dto";

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogsService: DogsService) {
    }

    @Get()
    getAll() {
        return this.dogsService.getAll();
    }

    @Get('/:uid')
    getOne(@Param('uid') uid: string) {
        return this.dogsService.getOne(uid);
    }

    @Post()
    create(@Body() data: CreateDogDto) {
        return this.dogsService.create(data);
    }

    @Patch('/:uid')
    update(@Param('uid') uid: string, @Body() data: UpdateDogDto) {
        return this.dogsService.update(uid, data)
    }

    @Delete('/:uid')
    delete(@Param('uid') uid: string) {
        return this.dogsService.delete(uid);
    }
}
