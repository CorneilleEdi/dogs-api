import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger, ValidationPipe} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {CONFIGURATIONS} from "./shared/configuration";

async function bootstrap() {
    const inProduction = process.env.NODE_ENV === 'production';


    const app = await NestFactory.create(AppModule, {
        logger: inProduction ? ["error", "warn", "verbose", "debug"] : ["log", "error", "warn", "verbose", "debug"],
    });

    app.useGlobalPipes(new ValidationPipe());

    const configService = app.get(ConfigService);

    const PORT = configService.get(CONFIGURATIONS.PORT);
    const APP_NAME = configService.get(CONFIGURATIONS.APP_NAME);

    await app.listen(PORT, () => {
        Logger.verbose(`${APP_NAME} start ,running and listening on port ${PORT}`, 'Application');
    });
}

bootstrap();