import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './curso.entity';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { CursoRepositorio } from './curso.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Curso]),
    TypeOrmModule.forFeature([CursoRepositorio])
  ],
  providers: [CursoService],
  controllers: [CursoController],
})

export class CursoModule {}
