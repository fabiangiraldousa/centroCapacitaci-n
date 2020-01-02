import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { HabilidadCurso } from './habilida-curso.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HabilidadCursoService extends TypeOrmCrudService<HabilidadCurso> {
    constructor( @InjectRepository(HabilidadCurso) repo) {
        super(repo);
      }
}
