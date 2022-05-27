import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {DogsService} from './dogs.service';
import {CreateDogDto} from "./dto/create-dog.dto";
import {UpdateDogDto} from "./dto/update-dog.dto";

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogsService: DogsService) {
    }

    @Get()
    async getAll() {
        return await this.dogsService.getAll();
    }

    @Get('/:uid')
    async getOne(@Param('uid') uid: string) {
        return await this.dogsService.getOne(uid);
    }

    @Post()
    async create(@Body() data: CreateDogDto) {
        return await this.dogsService.create(data);
    }

    @Patch('/:uid')
    async update(@Param('uid') uid: string, @Body() data: UpdateDogDto) {
        return await this.dogsService.update(uid, data)
    }

    @Delete('/:uid')
    async delete(@Param('uid') uid: string) {
        return await this.dogsService.delete(uid);
    }
}
