import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DogsModule} from './dogs/dogs.module';
import {ConfigurationModule} from "./shared/configuration";

@Module({
    imports: [ConfigurationModule, DogsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
