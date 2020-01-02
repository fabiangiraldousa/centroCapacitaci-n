import { Module } from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { RecursoController } from './recurso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recurso } from './recurso.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Recurso])],
  providers: [RecursoService],
  controllers: [RecursoController]
})
export class RecursoModule {}
