import {Module} from '@nestjs/common';
import {ConfigurationModule, CONFIGURATIONS} from "../configuration";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {DogEntity} from "../../dogs/entities/dog.entity";

@Module({
    imports: [ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigurationModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get(CONFIGURATIONS.POSTGRES_HOST),
                port: configService.get(CONFIGURATIONS.POSTGRES_PORT),
                username: configService.get(CONFIGURATIONS.POSTGRES_USERNAME),
                password: configService.get(CONFIGURATIONS.POSTGRES_PASSWORD),
                database: configService.get(CONFIGURATIONS.POSTGRES_DATABASE),
                entities: [DogEntity
                ],
                synchronize: process.env.NODE_ENV !== 'production',
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {
}
