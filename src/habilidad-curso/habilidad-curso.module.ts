import { Module } from '@nestjs/common';
import { HabilidadCursoService } from './habilidad-curso.service';
import { HabilidadCursoController } from './habilidad-curso.controller';
import { HabilidadCurso } from './habilida-curso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([HabilidadCurso])],
  providers: [HabilidadCursoService],
  controllers: [HabilidadCursoController]
})
export class HabilidadCursoModule {}
