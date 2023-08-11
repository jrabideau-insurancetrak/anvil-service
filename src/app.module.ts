import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnvilModule } from './anvil/anvil.module';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/envs/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`)

@Module({
  imports: [
    AnvilModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
