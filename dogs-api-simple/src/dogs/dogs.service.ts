import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {DogEntity} from './entities/dog.entity';
import {DogNotFoundException} from "./exceptions/dog-not-found.exception";
import {CreateDogDto} from "./dto/create-dog.dto";
import {Helpers} from "../shared/utils/helpers";

@Injectable()
export class DogsService {
    private dogs = [];

    constructor() {
    }

    getAll(): DogEntity[] {
        return this.dogs;
    }

    getOne(uid: string) {
        return this.findOne(uid);
    }

    create(data: CreateDogDto) {
        const dog: DogEntity = {
            uid: Helpers.generateUid(),
            name: data.name,
            age: data.age,
        }
        try {
            this.dogs.push(dog);
        } catch (e) {
            throw  new InternalServerErrorException(e)
        }
        return dog;
    }

    update(uid: string, data: CreateDogDto) {
        const oldDog = this.findOne(uid);

        const index = this.dogs.indexOf(oldDog);

        if (index > -1) {
            this.dogs.splice(index, 1);
        }

        const dog = {
            uid,
            name: data.name ?? oldDog.name,
            age: data.age ?? oldDog.age,
        }
        this.dogs.push(dog)
        return dog;
    }

    delete(uid: string) {
        const dog = this.findOne(uid);
        const index = this.dogs.indexOf(dog);

        if (index > -1) {
            this.dogs.splice(index, 1);
        }
        return {message: `${uid} deleted`}
    }

    findOne(uid: string) {
        const dog = this.dogs.find(x => x.uid === uid);
        if (!dog) throw  new DogNotFoundException(uid)
        return dog;
    }
}
