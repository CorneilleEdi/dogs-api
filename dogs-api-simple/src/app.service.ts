import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {CONFIGURATIONS} from "./shared/configuration";

@Injectable()
export class AppService {
    constructor(private readonly configService: ConfigService) {
    }

    getHello() {
        return {message: 'Welcome to ' + this.configService.get(CONFIGURATIONS.APP_NAME)};
    }
}
