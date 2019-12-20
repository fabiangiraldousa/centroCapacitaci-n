import { Module } from '@nestjs/common';
import { DocumentacionService } from './documentacion.service';
import { DocumentacionController } from './documentacion.controller';
import { Documentacion } from './documentacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Documentacion]),
  ],
  providers: [DocumentacionService],
  controllers: [DocumentacionController]
})
export class DocumentacionModule {}
