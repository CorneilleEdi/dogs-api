import {Module} from '@nestjs/common';
import {DatabaseModule} from '../shared/db/database.module';
import {DogsController} from './dogs.controller';
import {DogsService} from './dogs.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DogEntity} from "./entities/dog.entity";

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([DogEntity])],
    controllers: [DogsController],
    providers: [
        DogsService,
    ],
})
export class DogsModule {
}