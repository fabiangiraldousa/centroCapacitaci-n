import { Module } from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { RecursoController } from './recurso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recurso } from './recurso.entity';
import { RecursoRepositorio } from './recurso.repository';

@Module({
  imports:[ 
    TypeOrmModule.forFeature([Recurso]),
    TypeOrmModule.forFeature([RecursoRepositorio]),
],
  providers: [RecursoService],
  controllers: [RecursoController]
})
export class RecursoModule {}
