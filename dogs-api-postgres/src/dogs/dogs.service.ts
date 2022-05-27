import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {DogEntity} from './entities/dog.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {DogNotFoundException} from "./exceptions/dog-not-found.exception";
import {CreateDogDto} from "./dto/create-dog.dto";
import {Helpers} from "../shared/utils/helpers";

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(DogEntity)
        private dogsRepository: Repository<DogEntity>,
    ) {
    }

    getAll(): Promise<DogEntity[]> {
        return this.dogsRepository.find();
    }

    async getOne(uid: string) {
        return await this.findOne(uid);

    }

    async create(data: CreateDogDto) {
        const dog: DogEntity = {
            uid: Helpers.generateUid(),
            name: data.name,
            age: data.age,
        }
        try {
            await this.dogsRepository.save(dog);
        } catch (e) {
            throw  new InternalServerErrorException(e)
        }
        return dog;
    }

    async update(uid: string, data: CreateDogDto) {
        const oldDog = await this.findOne(uid);
        await this.dogsRepository.update(uid, {
            name: data.name ?? oldDog.name,
            age: data.age ?? oldDog.age,
        })
        return await this.findOne(uid);
    }

    async delete(uid: string) {
        await this.findOne(uid);
        await this.dogsRepository.delete(uid);

        return {message: `${uid} deleted`}
    }

    async findOne(uid: string) {
        const dog = await this.dogsRepository.findOne(uid);
        if (!dog) throw  new DogNotFoundException(uid)
        return dog;
    }
}
