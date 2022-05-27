import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class DogEntity {
    @PrimaryColumn()
    uid: string;

    @Column({length: 500})
    name: string;

    @Column()
    age: number;
}