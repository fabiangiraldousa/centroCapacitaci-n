import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Curso } from './curso.entity';

@Injectable()
export class CursoService extends TypeOrmCrudService<Curso> {
  constructor( @InjectRepository(Curso) repo) {
    super(repo);
  }
}