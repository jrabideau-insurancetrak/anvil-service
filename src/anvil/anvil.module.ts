import { Module } from '@nestjs/common'
import { AnvilController } from './anvil.controller'
import { AnvilService } from './anvil.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
    imports: [],
    controllers: [AnvilController],
    providers: [AnvilService],
    exports: [AnvilService]
})
export class AnvilModule {}