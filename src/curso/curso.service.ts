import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Curso } from './curso.entity';
import { CursoRepositorio } from './curso.repository';

@Injectable()
export class CursoService extends TypeOrmCrudService<Curso> {
  constructor( 
    @InjectRepository(Curso) repo,
    private repository:CursoRepositorio,
  ) {
    super(repo);
  }

  getMetadataCurso(id:number):Promise<Curso>{
    return this.repository.getMetaData(id);
  }

}