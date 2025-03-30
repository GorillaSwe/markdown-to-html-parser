import { Module } from '@nestjs/common';
import { AppController } from './api/rest/markdown.controller';
import { AppService } from './usecase/markdown.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
