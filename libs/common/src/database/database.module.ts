import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import {ConfigService} from '@nestjs/config'
import { ConfigModule } from '../config/config.module';


@Module({
    imports:[MongooseModule.forRootAsync({
        imports: [ConfigModule], 
        useFactory: (configService:ConfigService)=>{
            console.log(configService.get('MONGODB_URI'))
            return {
                uri:configService.get('MONGODB_URI')
            }
        },
        inject:[ConfigService]
    })]
})
export class DatabaseModule {}
